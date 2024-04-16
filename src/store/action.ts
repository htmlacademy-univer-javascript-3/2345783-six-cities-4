import {createAction} from '@reduxjs/toolkit';
import { Actions, AppRoute, AuthorizationStatus } from '../const/const';
import { Offer } from '../types/offer';

export const pickCity = createAction(Actions.PICK_CITY, (textContent: string | null) => ({
  payload: textContent,
}));

export const requireAuthorization = createAction<AuthorizationStatus>(Actions.REQUIRE_AUTHORIZATION);

export const filterOffers = createAction(Actions.FILTER_OFFERS);

export const loadOffers = createAction<Offer[]>(Actions.LOAD_OFFERS);

export const setOffersDataLoading = createAction<boolean>(Actions.SET_STATUS_OFFERS_DATA_LOADING);

export const setUserEmail = createAction<string>(Actions.SET_USER_EMAIL);

export const setError = createAction<string | null>(Actions.SET_ERROR);

export const redirectToRoute = createAction<AppRoute>(Actions.REDIRECT_ROUTE);
