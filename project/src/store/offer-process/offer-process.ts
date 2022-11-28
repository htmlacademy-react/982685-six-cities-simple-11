import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchCurrentOfferAction, fetchNearbyOffersAction } from '../api-actions';
import { OfferProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: OfferProcess = {
  offers: [],
  isOffersLoading: false,
  currentOffer: undefined,
  isCurrentOfferLoading: false,
  nearbyOffers: [],
  hasError: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isCurrentOfferLoading = false;
      });
  }
});
