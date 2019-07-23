import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { setError } from './errorReducer';
import { champions } from './championsReducer';
import { setRoster } from './rosterReducer';
import { dragIndex } from './dragIndexReducer';
import { rosterIndex } from './rosterIndexReducer'

export const rootReducer = combineReducers({
  isLoading,
  setError,
  champions,
  setRoster,
  dragIndex,
  rosterIndex
})