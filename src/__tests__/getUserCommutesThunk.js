import { updateCommutes, hasError } from '../actions';
import { getUserCommutes } from '../thunks/getUserCommutes';

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
    const thunk = getUserCommutes()
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('dispatches updateCommutes if response is ok', async () => {
    const thunk = getUserCommutes();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(updateCommutes());
  });

  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = getUserCommutes();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});