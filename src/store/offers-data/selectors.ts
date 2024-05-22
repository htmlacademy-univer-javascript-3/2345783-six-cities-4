import { SlicesName } from '../../const/const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getOffersDataLoadingStatus = (state: Pick<State, SlicesName.OffersData>): boolean => state[SlicesName.OffersData].isOffersDataLoading;
export const getOffers = (state: Pick<State, SlicesName.OffersData>): Offer[]=> state[SlicesName.OffersData].offers;
export const getFilteredOffers = (state: Pick<State, SlicesName.OffersData>): Offer[]=> state[SlicesName.OffersData].filteredOffers;
export const getCityName = (state: Pick<State, SlicesName.OffersData>): string => state[SlicesName.OffersData].cityName;
