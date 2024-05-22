import { makeFakeOffersList } from '../../const/mocks';
import { fetchFavoriteOffersAction } from '../api-actions';
import { favoriteOffersData } from './favorite-offers-data';

describe('FavoriteOffersData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: [],
    };

    const result = favoriteOffersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: [],
    };

    const result = favoriteOffersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set isFavoriteOffersDataLoading to true with fetchFavoriteOffersAction.pending', () => {
    const initialState = {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: [],
    };

    const expectedState = {
      isFavoriteOffersDataLoading: true,
      favoriteOffers: [],
    };

    const result = favoriteOffersData.reducer(initialState, fetchFavoriteOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set isFavoriteOffersDataLoading to true with fetchFavoriteOffersAction.pending', () => {
    const initialState = {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: [],
    };

    const expectedState = {
      isFavoriteOffersDataLoading: true,
      favoriteOffers: [],
    };

    const result = favoriteOffersData.reducer(initialState, fetchFavoriteOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set isFavoriteOffersDataLoading to false with fetchFavoriteOffersAction.rejected', () => {
    const initialState = {
      isFavoriteOffersDataLoading: true,
      favoriteOffers: [],
    };

    const expectedState = {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: [],
    };

    const result = favoriteOffersData.reducer(initialState, fetchFavoriteOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set isFavoriteOffersDataLoading to false, favoriteOffers to Offer[] with fetchFavoriteOffersAction.fulfilled', () => {
    const initialState = {
      isFavoriteOffersDataLoading: true,
      favoriteOffers: [],
    };

    const expectedState = {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: makeFakeOffersList(),
    };

    const result = favoriteOffersData.reducer(initialState, fetchFavoriteOffersAction.fulfilled(
      makeFakeOffersList(), '', undefined
    ));

    expect(result).toEqual(expectedState);
  });

});
