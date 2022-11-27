import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferReviwsAction } from '../api-actions';
import { CommentProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: CommentProcess = {
  currentOfferReviews: [],
};

export const commentProcess = createSlice({
  name: NameSpace.Comment,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviwsAction.fulfilled, (state, action) => {
        state.currentOfferReviews = action.payload;
      });
  }
});
