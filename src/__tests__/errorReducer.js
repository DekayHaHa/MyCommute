import { error } from '../reducers/error';
import { hasError } from '../actions';

describe('hasError reducer', () => {
  it('should return default state when no type given', () => {
    const expected = ''
    const results = error(undefined, {})
    expect(results).toEqual(expected)
  })

  it('should return error when type is HAS_ERROR', () => {
    const mockError = 'Im an error'
    const expected = 'Im an error'
    const results = error('', hasError(mockError))
    expect(results).toEqual(expected)
  })
})