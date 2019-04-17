export const signinUser = (user) => ({
  type: 'SIGNIN_USER',
  user
})

export const userSignOut = () => ({
  type: 'USER_SIGN_OUT',
})

export const clearPreferences = (pref) => ({
  type: 'CLEAR_PREFERENCES',
})

export const clearWeather = (weather) => ({
  type: 'CLEAR_WEATHER',
})

export const clearCommutes = (commutes) => ({
  type: 'CLEAR_COMMUTES',
})

export const updatePreferences = (pref) => ({
  type: 'UPDATE_PREFERENCES',
  pref
})

export const updateWeather = (weather) => ({
  type: 'UPDATE_WEATHER',
  weather
})

export const updateCommutes = (commutes) => ({
  type: 'UPDATE_COMMUTES',
  commutes
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
})