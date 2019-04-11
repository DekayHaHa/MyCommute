export const preferences = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PREFERENCES':
      return action.pref;
    default:
      return state;
  }
}