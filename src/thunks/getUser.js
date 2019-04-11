import { signinUser, hasError } from '../actions';

export const getUser = () => {
	return async (dispatch) => {
		try {
			const response = await fetch('http://localhost:3001/');
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			dispatch(signinUser(data));
		} catch (error) {
			dispatch(hasError(error.message));
		}
	}
}