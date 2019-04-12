import { combineReducers } from 'redux';
import { user } from './user'
import { error } from './error'
import { preferences } from './preferences'
import { weather } from './weather'
export const rootReducer = combineReducers({
  user,
  pref: preferences,
  weather,
  error
});