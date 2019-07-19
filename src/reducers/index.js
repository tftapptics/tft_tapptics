import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { champions } from './championsReducer';

export const rootReducer = combineReducers({
  isLoading,
  champions
})