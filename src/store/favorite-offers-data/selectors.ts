import { SlicesName } from '../../const/const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getFavoriteOffersDataLoadingStatus = (state: Pick<State, SlicesName.FavoriteOffersData>): boolean => state[SlicesName.FavoriteOffersData].isFavoriteOffersDataLoading;
export const getFavoriteOffers = (state: Pick<State, SlicesName.FavoriteOffersData>): Offer[]=> state[SlicesName.FavoriteOffersData].favoriteOffers;
