import { clearCommutes, clearPreferences, clearWeather, userSignOut } from '../actions';

export const signUserOut = () => {
  return (dispatch) => {
    dispatch(userSignOut())
    dispatch(clearCommutes())
    dispatch(clearPreferences())
    dispatch(clearWeather())
  }
}