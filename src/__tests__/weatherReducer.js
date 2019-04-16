import { weather } from '../reducers/weather';
import { updateWeather } from '../actions';

describe('weather reducer', () => {
  it('should return default state when no type given', () => {
    const expected = {}
    const results = weather(undefined, {})
    expect(results).toEqual(expected)
  })

  it('should return weather when type is UPDATE_WEATHER', () => {
    const mockWeather = { currently: 'im weather' }
    const expected = { currently: 'im weather' }
    const results = weather({}, updateWeather(mockWeather))
    expect(results).toEqual(expected)
  })
})