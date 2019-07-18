import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
  isLoading,
  burgerMenu
})