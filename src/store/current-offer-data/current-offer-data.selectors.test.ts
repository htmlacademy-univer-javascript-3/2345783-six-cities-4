import { SlicesName } from '../../const/const';
import { makeFakeOffer, makeFakeOffersList, makeFakeReviewsList } from '../../const/mocks';
import { getComments, getCurrentOfferDataLoadingStatus, getNearbyOffers, getOfferInfo } from './selectors';

describe('CurrentOfferData selectors', () => {
  const state = {
    [SlicesName.CurrentOfferData]: {
      isCurrentOfferDataLoading: false,
      offerInfo: makeFakeOffer(),
      comments: makeFakeReviewsList(),
      nearbyOffers: makeFakeOffersList()
    }
  };

  it('should return data loading status for current offer', () => {
    const { isCurrentOfferDataLoading } = state[SlicesName.CurrentOfferData];
    const result = getCurrentOfferDataLoadingStatus(state);
    expect(result).toEqual(isCurrentOfferDataLoading);
  });

  it('should return info for current offer', () => {
    const { offerInfo } = state[SlicesName.CurrentOfferData];
    const result = getOfferInfo(state);
    expect(result).toEqual(offerInfo);
  });

  it('should return reviews for current offer', () => {
    const { comments } = state[SlicesName.CurrentOfferData];
    const result = getComments(state);
    expect(result).toEqual(comments);
  });

  it('should return nearby offers for current offer', () => {
    const { nearbyOffers } = state[SlicesName.CurrentOfferData];
    const result = getNearbyOffers(state);
    expect(result).toEqual(nearbyOffers);
  });
});
