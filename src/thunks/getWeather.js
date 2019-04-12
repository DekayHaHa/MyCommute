import { hasError, updatePreferences } from '../actions';
import { key } from '../key'
export const getWeather = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://www.zipcodeapi.com/rest/${key}/info.json/${user.zip}/degrees`);
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