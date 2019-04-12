import { hasError, updatePreferences } from '../actions';

export const getUserCommutes = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/user/commutes');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(updatePreferences(data));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  }
}