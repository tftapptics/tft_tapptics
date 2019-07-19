import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { setError } from './errorReducer';
import { champions } from './championsReducer';
import { setRoster } from './rosterReducer'

export const rootReducer = combineReducers({
  isLoading,
  setError,
  champions,
  setRoster
})