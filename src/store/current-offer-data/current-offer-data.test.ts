import { makeFakeOffer, makeFakeOffersList, makeFakeReviewsList } from '../../const/mocks';
import { fetchOfferInfoAction, sendOfferCommentAction } from '../api-actions';
import { currentOfferData } from './current-offer-data';

describe('CurrentOfferData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isCurrentOfferDataLoading: false,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const result = currentOfferData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isCurrentOfferDataLoading: false,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const result = currentOfferData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set isCurrentOfferDataLoading to true with fetchOfferInfoAction.pending', () => {
    const initialState = {
      isCurrentOfferDataLoading: false,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const expectedState = {
      isCurrentOfferDataLoading: true,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const result = currentOfferData.reducer(initialState, fetchOfferInfoAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set offerInfo to string, comments to ReviewType[], nearbyOffers to Offer[], isCurrentOfferDataLoading to false with fetchOfferInfoAction.fulfilled', () => {
    const initialState = {
      isCurrentOfferDataLoading: true,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const expectedState = {
      isCurrentOfferDataLoading: false,
      offerInfo: makeFakeOffer(),
      comments: makeFakeReviewsList(),
      nearbyOffers: makeFakeOffersList(),
    };

    const result = currentOfferData.reducer(initialState, fetchOfferInfoAction.fulfilled(
      {offerData: makeFakeOffer(), nearbyOffersData: makeFakeOffersList(), commentsData: makeFakeReviewsList()}, '', ''
    ));

    expect(result).toEqual(expectedState);
  });

  it('should set isCurrentOfferDataLoading to false with fetchOfferInfoAction.rejected', () => {
    const initialState = {
      isCurrentOfferDataLoading: true,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const expectedState = {
      isCurrentOfferDataLoading: false,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const result = currentOfferData.reducer(initialState, fetchOfferInfoAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set comments to ReviewType[] with sendOfferCommentAction.fulfilled', () => {
    const initialState = {
      isCurrentOfferDataLoading: false,
      offerInfo: null,
      comments: [],
      nearbyOffers:[],
    };

    const expectedState = {
      isCurrentOfferDataLoading: false,
      offerInfo: null,
      comments: makeFakeReviewsList(),
      nearbyOffers:[],
    };

    const result = currentOfferData.reducer(initialState, sendOfferCommentAction.fulfilled(
      makeFakeReviewsList(), '', {
        id: '1',
        commentData: {comment: 'comment', rating: 4},
        resetFormData: () => undefined
      }
    ));

    expect(result).toEqual(expectedState);
  });
});
