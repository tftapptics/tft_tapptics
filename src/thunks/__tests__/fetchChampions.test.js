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

  it.skip('should dispatch setChampions with the correct params', async () => {
    const champions = [{name: 'Gnar'}];
    const thunk = fetchChampions(mockUrl)
    mockDispatch = jest.fn().mockImplementation(() => champions);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setChampions(champions));
  })

  it('should dispatch isLoading(false)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Something went wrong'
      })
    })
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
  });

})