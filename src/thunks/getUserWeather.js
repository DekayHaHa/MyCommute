import { hasError, updateWeather } from '../actions';

export const getUserWeather = (id) => {
  return async (dispatch) => {
    const optObj = {
      method: 'GET',
      body: JSON.stringify(id),
      headers: { "Content-Type": "application/json" }
    }
    try {
      const response = await fetch('http://localhost:3001/user/weather', optObj);
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