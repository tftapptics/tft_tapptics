import { fetchChampions } from '../fetchChampions';
import { isLoading, setError, setChampions } from '../../actions';
import { mapDispatchToProps } from '../../containers/App/App';

describe('fetchChampions', () => {

  let mockUrl;
  let mockChampions;
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockUrl = 'www.lol.com';
    mockDispatch = jest.fn();
    mockChampions = { name: 'Miss Fortune' }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockChampions
        })
      });
    });
    thunk = fetchChampions(mockUrl);
  });

  it('should call fetchData with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should dispatch isLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch isLoading(false)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });
})