export const commutes = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_COMMUTES':
      return action.commutes;
    case 'CLEAR_COMMUTES':
      return {};
    default:
      return state;
  }
}