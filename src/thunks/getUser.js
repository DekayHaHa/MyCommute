import { signinUser, hasError } from '../actions';
import { getUserPreferences } from './getUserPreferences';

export const getUser = (name, pass) => {
  return async (dispatch) => {
    const optObj = {
      method: 'POST',
      body: JSON.stringify({ name, pass }),
      headers: { "Content-Type": "application/json" }
    }
    try {
      const response = await fetch('http://localhost:3001/user', optObj);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      await dispatch(signinUser(data));
      await dispatch(getUserPreferences(data.id))
    } catch (error) {
      console.log(error)
      dispatch(hasError(error.message));
    }
  }
}