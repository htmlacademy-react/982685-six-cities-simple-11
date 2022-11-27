import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferProcess } from '../../types/state';
import { City } from '../../types/offers';
import { SortTypes, NameSpace, InitialCity } from '../../const';

const initialState: OfferProcess = {
  city: InitialCity,
  sortOptionOffers: SortTypes.Popular,
  selectedOfferId: undefined,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setSortOptionOffers: (state, action: PayloadAction<{sortOptionOffers: SortTypes}>) => {
      state.sortOptionOffers = action.payload.sortOptionOffers;
    },
    setSelectedOfferId: (state, action: PayloadAction<number | undefined>) => {
      state.selectedOfferId = action.payload;
    },
  },
});

export const { changeCity, setSortOptionOffers, setSelectedOfferId } = offerProcess.actions;
