export const commutes = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_COMMUTES':
      return action.commutes;
    default:
      return state;
  }
}