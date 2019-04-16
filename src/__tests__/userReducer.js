import { user } from '../reducers/user';
import { signinUser } from '../actions';

describe('user reducer', () => {
  it('should return default state when no type given', () => {
    const expected = {}
    const results = user(undefined, {})
    expect(results).toEqual(expected)
  })

  it('should return user when type is SIGNIN_USER', () => {
    const mockUser = { id: 1, userName: 'marhk' }
    const expected = { id: 1, userName: 'marhk' }
    const results = user({}, signinUser(mockUser))
    expect(results).toEqual(expected)
  })
})