import { combineReducers } from 'redux';
import { user } from './user'
import { error } from './error'
import { preferences } from './preferences'
export const rootReducer = combineReducers({
  user,
  pref: preferences,
  error
});