export const user = (state = {}, action) => {
	switch (action.type) {
		case 'SIGNIN_USER':
			return action.user;
		default:
			return state;
	}
}