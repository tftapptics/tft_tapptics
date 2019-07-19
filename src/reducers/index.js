import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { setError } from './errorReducer';
import { champions } from './championsReducer';

export const rootReducer = combineReducers({
  isLoading,
  setError,
  champions
})