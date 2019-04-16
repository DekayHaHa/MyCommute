export const signinUser = (user) => ({
  type: 'SIGNIN_USER',
  user
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
	type: 'SIGNIN_USER',
  user
})

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
})