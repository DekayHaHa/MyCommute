import { signinUser, hasError, updatePreferences, updateWeather, updateCommutes, isLoading } from '../actions'

describe('actions', () => {

  describe('signinUser', () => {
    it('should return user with SIGNIN_USER as a type', () => {
      const mockUser = { id: 1, userName: 'marhk' }
      const expected = {
        type: 'SIGNIN_USER',
        user: { id: 1, userName: 'marhk' }
      }
      const results = signinUser(mockUser)
      expect(results).toEqual(expected)
    })
  })

  describe('hasError', () => {
    it('should return error with HAS_ERROR as a type', () => {
      const mockError = 'Im an ERROR'
      const expected = {
        type: 'HAS_ERROR',
        error: 'Im an ERROR'
      }
      const results = hasError(mockError)
      expect(results).toEqual(expected)
    })
  })

  describe('updatePreferences', () => {
    it('should return pref with UPDATE_PREFERENCES as a type', () => {
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
        type: 'UPDATE_PREFERENCES',
        pref: {
          id: 1,
          tram: {
            temp: 20,
            estimatedTime: 40,
            priority: 2,
            price: 1
          }
        }
      }
      const results = updatePreferences(mockPref)
      expect(results).toEqual(expected)
    })
  })

  describe('updateWeather', () => {
    it('should return weather with UPDATE_WEATHER as a type', () => {
      const mockWeather = { currently: 'Im the weather' }
      const expected = {
        type: 'UPDATE_WEATHER',
        weather: { currently: 'Im the weather' }
      }
      const results = updateWeather(mockWeather)
      expect(results).toEqual(expected)
    })
  })

  describe('updateCommutes', () => {
    it('should return commutes with UPDATE_COMMUTES as a type', () => {
      const mockCommutes = { id: 3, morning: '8:30am' }
      const expected = {
        type: 'UPDATE_COMMUTES',
        commutes: { id: 3, morning: '8:30am' }
      }
      const results = updateCommutes(mockCommutes)
      expect(results).toEqual(expected)
    })
  })

  describe('isLoading', () => {
    it('should return boolean with IS_LOADING as a type', () => {
      const mockBool = true
      const expected = {
        type: 'IS_LOADING',
        isLoading: true
      }
      const results = isLoading(mockBool)
      expect(results).toEqual(expected)
    })
  })
})