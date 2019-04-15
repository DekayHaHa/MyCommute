import { signinUser, hasError } from '../actions';
import { getUserPreferences } from './getUserPreferences';
import { getUserCommutes } from './getUserCommutes'
import { getUserWeather } from './getUserWeather'

export const getUser = (name, pass) => {
  return async (dispatch) => {
    const optObj = {
      method: 'POST',
      body: JSON.stringify({ name, pass }),
      headers: { "Content-Type": "application/json" }
    }
    try {
      // isLoading
      const response = await fetch('http://localhost:3001/api/user', optObj);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      await dispatch(signinUser(data));
      await dispatch(getUserPreferences(data.id))
      await dispatch(getUserWeather(data.id))
      await dispatch(getUserCommutes(data.id))
      // isLoading
    } catch (error) {
      console.log(error)
      dispatch(hasError(error.message));
    }
  }
}