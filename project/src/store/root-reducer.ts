import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process/app-process';
import { offerProcess } from './offer-process/offer-process';
import { reviewProcess } from './review-process/review-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
