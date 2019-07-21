import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { setError } from './errorReducer';
import { champions } from './championsReducer';
import { setRoster } from './rosterReducer';
import { synergies } from './synergiesReducer';

export const rootReducer = combineReducers({
  isLoading,
  setError,
  champions,
  setRoster,
  synergies
})