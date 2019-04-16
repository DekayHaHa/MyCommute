export const weather = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WEATHER':
      return action.weather
    default:
      return state
  }
}