import {createReducer} from '@reduxjs/toolkit';
import { CitiesName } from '../const/const';
import { initialStateType } from '../types/initial-state';
import { filterOffers, loadOffers, pickCity, setOffersDataLoading } from './action';

const initialState: initialStateType = {
  offers: [],
  cityName: CitiesName.PARIS,
  filteredOffers: [],
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.filteredOffers = state.offers.filter((offer)=> offer.city.name === state.cityName);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
