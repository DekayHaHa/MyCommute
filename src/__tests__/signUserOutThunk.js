import { clearCommutes, clearPreferences, clearWeather, userSignOut } from '../actions';
import { signUserOut } from '../thunks/signUserOut';

jest.mock('../actions')

describe('addNote', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('dispatches clearCommutes & clearPreferences', () => {
    const thunk = signUserOut();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(clearCommutes());
    expect(mockDispatch).toHaveBeenCalledWith(clearPreferences());
  });

  it('dispatches clearWeather & userSignOut', () => {
    const thunk = signUserOut();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(clearWeather());
    expect(mockDispatch).toHaveBeenCalledWith(userSignOut());
  });

});