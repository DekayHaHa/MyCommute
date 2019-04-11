import { combineReducers } from 'redux';
import { user } from './user'
import { error } from './error'
export const rootReducer = combineReducers({
	user,
	error
});