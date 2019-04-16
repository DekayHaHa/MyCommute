import { hasError, signinUser } from '../actions';

export const createUser = (user) => {
  return async (dispatch) => {
    const optObj = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    }
    try {
      const response = await fetch('http://localhost:3001/addUser', optObj);
      console.log(response)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      console.log(data.user)
      dispatch(signinUser(data));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  }
}