export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNIN_USER':
      return action.user;
    case 'USER_SIGN_OUT':
      return {};
    default:
      return state;
  }
}