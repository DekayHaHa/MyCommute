export const preferences = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PREFERENCES':
      return action.pref;
    case 'CLEAR_PREFERENCES':
      return {};
    default:
      return state;
  }
}