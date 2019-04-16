import { hasError, updateCommutes } from '../actions';

export const getUserCommutes = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/commute/${id}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(updateCommutes(data));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  }
}