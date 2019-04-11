export const signinUser = (user) => ({
  type: 'SIGNIN_USER',
  user
})

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
})

export const updatePreferences = (pref) => ({
  type: 'GET_PREFERENCES',
  pref
})