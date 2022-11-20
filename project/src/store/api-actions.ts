import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setOffersAction } from './actions';
import { AppDispatch, State } from '../types/state';
import { APIRoute, Offers } from '../types/types';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchQuestions', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setOffersAction(data));
});
