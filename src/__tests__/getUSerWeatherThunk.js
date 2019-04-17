import { updateWeather, hasError } from '../actions';
import { getUserWeather } from '../thunks/getUserWeather';

jest.mock('../actions')

describe('addNote', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => ({ id: 1 })
    }));
  });

  it('calls fetch', async () => {
    const thunk = getUserWeather()
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('dispatches updateWeather if response is ok', async () => {
    const thunk = getUserWeather();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(updateWeather());
  });

  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = getUserWeather();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});