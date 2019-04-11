export const signinUser = (user) => ({
	type: 'SIGNIN_USER',
	user
})

export const hasError = (error) => ({
	type: 'HAS_ERROR',
	error
})