import { SlicesName } from '../../const/const';
import { makeFakeOffersList } from '../../const/mocks';
import { getCityName, getOffers, getOffersDataLoadingStatus } from './selectors';

describe('OffersData Selectors', () => {
  const state = {
    [SlicesName.OffersData]: {
      isOffersDataLoading: false,
      offers: makeFakeOffersList(),
      filteredOffers: makeFakeOffersList(),
      cityName: 'Paris'
    }
  };

  it('should return offers data loading status', () => {
    const { isOffersDataLoading } = state[SlicesName.OffersData];
    const result = getOffersDataLoadingStatus(state);
    expect(result).toEqual(isOffersDataLoading);
  });

  it('should return offers', () => {
    const { offers } = state[SlicesName.OffersData];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return filtered offers', () => {
    const { isOffersDataLoading } = state[SlicesName.OffersData];
    const result = getOffersDataLoadingStatus(state);
    expect(result).toEqual(isOffersDataLoading);
  });

  it('should return filtered offers', () => {
    const { cityName } = state[SlicesName.OffersData];
    const result = getCityName(state);
    expect(result).toEqual(cityName);
  });
});
