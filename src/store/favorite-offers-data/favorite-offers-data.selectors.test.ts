import { SlicesName } from '../../const/const';
import { makeFakeOffersList } from '../../const/mocks';
import { getFavoriteOffers, getFavoriteOffersDataLoadingStatus } from './selectors';

describe('FavoriteOffersData Selectors', () => {
  const state = {
    [SlicesName.FavoriteOffersData]: {
      isFavoriteOffersDataLoading: false,
      favoriteOffers: makeFakeOffersList()
    }
  };

  it('should return favorite offers loading status', () => {
    const { isFavoriteOffersDataLoading } = state[SlicesName.FavoriteOffersData];
    const result = getFavoriteOffersDataLoadingStatus(state);
    expect(result).toEqual(isFavoriteOffersDataLoading);
  });

  it('should return favorite offers', () => {
    const { favoriteOffers } = state[SlicesName.FavoriteOffersData];
    const result = getFavoriteOffers(state);
    expect(result).toEqual(favoriteOffers);
  });
});
