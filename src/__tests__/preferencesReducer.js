import { preferences } from '../reducers/preferences';
import { updatePreferences } from '../actions';

describe('preferences reducer', () => {
  it('should return default state when no type given', () => {
    const expected = {}
    const results = preferences(undefined, {})
    expect(results).toEqual(expected)
  })

  it('should return preferences when type is UPDATE_PREFERENCES', () => {
    const mockPref = {
      id: 1,
      tram: {
        temp: 20,
        estimatedTime: 40,
        priority: 2,
        price: 1
      }
    }
    const expected = {
      id: 1,
      tram: {
        temp: 20,
        estimatedTime: 40,
        priority: 2,
        price: 1
      }
    }
    const results = preferences({}, updatePreferences(mockPref))
    expect(results).toEqual(expected)
  })
})