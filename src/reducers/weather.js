export const weather = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WEATHER':
      return action.weather
    case 'CLEAR_WEATHER':
      return {};
    default:
      return state
  }
}