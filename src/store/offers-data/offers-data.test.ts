import { CitiesName } from '../../const/const';
import { makeFakeOffer, makeFakeOffersList } from '../../const/mocks';
import { fetchOffersAction, setOfferFavoriteStatusAction } from '../api-actions';
import { offersData } from './offers-data';

describe('OffersData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isOffersDataLoading: false,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const result = offersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isOffersDataLoading: false,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const result = offersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set isOffersDataLoading to true with fetchOffersAction.pending', () => {
    const initialState = {
      isOffersDataLoading: false,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const expectedState = {
      isOffersDataLoading: true,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const result = offersData.reducer(initialState, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set isOffersDataLoading to false with fetchOffersAction.rejected', () => {
    const initialState = {
      isOffersDataLoading: true,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const expectedState = {
      isOffersDataLoading: false,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const result = offersData.reducer(initialState, fetchOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set isOffersDataLoading to false, offers to Offer[], filteredOffers to Offer[] (empty list in this case since no mock offers match Paris) with fetchOffersAction.rejected', () => {
    const initialState = {
      isOffersDataLoading: true,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const expectedState = {
      isOffersDataLoading: false,
      offers: makeFakeOffersList(),
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const result = offersData.reducer(initialState, fetchOffersAction.fulfilled(
      makeFakeOffersList(), '', undefined
    ));

    expect(result).toEqual(expectedState);
  });

  it('should set isOffersDataLoading to false, offers to Offer[], filteredOffers to Offer[] with fetchOffersAction.rejected', () => {
    const initialState = {
      isOffersDataLoading: true,
      offers: [],
      filteredOffers: [],
      cityName: CitiesName.AMSTERDAM,
    };

    const expectedState = {
      isOffersDataLoading: false,
      offers: makeFakeOffersList(),
      filteredOffers: makeFakeOffersList(),
      cityName: CitiesName.AMSTERDAM,
    };

    const result = offersData.reducer(initialState, fetchOffersAction.fulfilled(
      makeFakeOffersList(), '', undefined
    ));

    expect(result).toEqual(expectedState);
  });

  it('should add offer to offers with setOfferFavoriteStatusAction.fulfilled', () => {
    const initialState = {
      isOffersDataLoading: false,
      offers: makeFakeOffersList(),
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    let offers = makeFakeOffersList();
    const index = offers.findIndex((offer) => offer.id === makeFakeOffer().id);
    offers = [
      ...offers.slice(0, index),
      makeFakeOffer(),
      ...offers.slice(index + 1),
    ];

    const expectedState = {
      isOffersDataLoading: false,
      offers: offers,
      filteredOffers: [],
      cityName: CitiesName.PARIS,
    };

    const result = offersData.reducer(initialState, setOfferFavoriteStatusAction.fulfilled(
      makeFakeOffer(), '', {id: '1', favoriteStatus: 'true'}));

    expect(result).toEqual(expectedState);
  });
});
