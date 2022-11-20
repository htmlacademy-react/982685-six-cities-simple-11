import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { requireAuthorization, setOffersAction } from './actions';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthorizationStatus, Offers } from '../types/types';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuestions',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersAction(data));
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);
