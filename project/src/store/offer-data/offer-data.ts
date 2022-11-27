import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchOfferAction, fetchNearbyOffersAction } from '../api-actions';
import { redirectToRoute } from '../actions';
import { OfferData } from '../../types/state';
import { AppRoute, NameSpace } from '../../const';

const initialState: OfferData = {
  offers: [],
  currentOffer: undefined,
  nearbyOffers: [],
  isDataLoading: false,
  hasError: false,
};

export const offerData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        redirectToRoute(AppRoute.Root);
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
