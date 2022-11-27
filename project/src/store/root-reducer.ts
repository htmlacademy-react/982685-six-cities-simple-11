import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerData } from './offer-data/offer-data';
import { offerProcess } from './offer-process/offer-process';
import { commentProcess } from './comment-process/comment-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offerData.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.Comment]: commentProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
