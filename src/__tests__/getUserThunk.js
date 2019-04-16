import { signinUser, hasError } from '../actions';
import { getUserCommutes } from '../thunks/getUserCommutes';
import { getUserPreferences } from '../thunks/getUserPreferences';
import { getUserWeather } from '../thunks/getUserWeather';
import { getUser } from '../thunks/getUser';

jest.mock('../thunks/getUserCommutes');
jest.mock('../thunks/getUserPreferences');
jest.mock('../thunks/getUserWeather');
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
    const thunk = getUser()
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('dispatches signinUser if response is ok', async () => {
    const thunk = getUser();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(signinUser());
  });

  it('dispatches getUserCommutes if response is ok', async () => {
    const thunk = getUser();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getUserCommutes());
  });

  it('dispatches getUserPreferences if response is ok', async () => {
    const thunk = getUser();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getUserPreferences());
  });

  it('dispatches getUserWeather if response is ok', async () => {
    const thunk = getUser();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getUserWeather());
  });

  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = getUser();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});