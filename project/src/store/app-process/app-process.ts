import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppProcess } from '../../types/state';
import { City } from '../../types/offers';
import { SortType, NameSpace, InitialCity } from '../../const';

const initialState: AppProcess = {
  city: InitialCity,
  sortOptionOffers: SortType.Popular,
  selectedOfferId: undefined,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setSortOptionOffers: (state, action: PayloadAction<{sortOptionOffers: SortType}>) => {
      state.sortOptionOffers = action.payload.sortOptionOffers;
    },
    setSelectedOfferId: (state, action: PayloadAction<number | undefined>) => {
      state.selectedOfferId = action.payload;
    },
  },
});

export const { changeCity, setSortOptionOffers, setSelectedOfferId } = appProcess.actions;
