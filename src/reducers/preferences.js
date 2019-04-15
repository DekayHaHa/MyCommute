export const preferences = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PREFERENCES':
      return action.pref;
    default:
      return state;
  }
}