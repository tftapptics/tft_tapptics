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

  it.skip('should dispatch setChampions if the response is okay', async () => {
    await thunk(mockDispatch);
    const mockState = {champions: [{name: 'Yasuo'}] }

    const actionToDispatch = setChampions(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setChampions(mockState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
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