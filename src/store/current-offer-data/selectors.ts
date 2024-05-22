import { SlicesName } from '../../const/const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { ReviewType } from '../../types/review';

export const getCurrentOfferDataLoadingStatus = (state: Pick<State, SlicesName.CurrentOfferData>): boolean => state[SlicesName.CurrentOfferData].isCurrentOfferDataLoading;
export const getOfferInfo = (state: Pick<State, SlicesName.CurrentOfferData>): Offer | null => state[SlicesName.CurrentOfferData].offerInfo;
export const getComments = (state: Pick<State, SlicesName.CurrentOfferData>): ReviewType[] => state[SlicesName.CurrentOfferData].comments;
export const getNearbyOffers = (state: Pick<State, SlicesName.CurrentOfferData>): Offer[] => state[SlicesName.CurrentOfferData].nearbyOffers;
