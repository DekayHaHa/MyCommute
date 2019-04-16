import { hasError, updateWeather } from '../actions';

export const getUserWeather = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/weather/${id}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(updateWeather(data));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  }
}