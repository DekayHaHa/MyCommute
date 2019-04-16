import { commutes } from '../reducers/commutes';
import { updateCommutes } from '../actions';

describe('commutes reducer', () => {
  it('should return default state when no type given', () => {
    const expected = {}
    const results = commutes(undefined, {})
    expect(results).toEqual(expected)
  })

  it('should return commutes when type is UPDATE_COMMUTES', () => {
    const mockCommutes = { id: 3, morning: '8:30am' }
    const expected = { id: 3, morning: '8:30am' }
    const results = commutes({}, updateCommutes(mockCommutes))
    expect(results).toEqual(expected)
  })
})