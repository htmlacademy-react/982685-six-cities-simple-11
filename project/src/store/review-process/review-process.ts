import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferReviwsAction } from '../api-actions';
import { ReviewProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ReviewProcess = {
  currentOfferReviews: [],
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviwsAction.fulfilled, (state, action) => {
        state.currentOfferReviews = action.payload;
      });
  }
});
