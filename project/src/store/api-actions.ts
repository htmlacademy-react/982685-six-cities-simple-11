import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  redirectToRoute,
  requireAuthorizationAction,
  setCurrentOfferAction,
  setCurrentOfferReviewsAction,
  setDataLoadingStatusAction,
  setNearbyOffersAction,
  setOffersAction,
} from './actions';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { Offer, Offers, ReviewsType }from '../types/offers';
import { AuthData, UserData } from '../types/user';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuestions', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatusAction(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setDataLoadingStatusAction(false));
  dispatch(setOffersAction(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferById', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    dispatch(setCurrentOfferAction(data));
  }
  catch {
    dispatch(redirectToRoute(AppRoute.Offer));
  }
});

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(setNearbyOffersAction(data));
});

export const fetchOfferReviwsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferReviews', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewsType>(`${APIRoute.Reviews}/${id}`);
  dispatch(setCurrentOfferReviewsAction(data));
});

export const fetchSendCommentAction = createAsyncThunk<
  void,
  {
    id: number;
    comment: string;
    rating: number;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postReview',
  async ({ id, comment, rating }, { extra: api }) => {
    await api.post(`${APIRoute.Reviews}/${id}`, { comment, rating });
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
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Root));
});
