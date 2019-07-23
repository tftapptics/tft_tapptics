import { fetchItems } from '../fetchItems';
import { isLoading, setError, setItems } from '../../actions';

describe('fetchItems', () => {

  let mockUrl;
  let mockItems;
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockUrl = 'www.childishgambino.com';
    mockDispatch = jest.fn();
    mockItems = [{name: 'Donny G.'}];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true, 
        json: () => Promise.resolve({
          data: mockItems
        })
      })
    });
    thunk = fetchItems(mockUrl);
  });

  it('should call fetchData with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should dispatch isLoading(true)', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch setItems with the correct params', async () => {
    let data = await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setItems(data));
  })

  it('should dispatch isLoading(false)', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch an error if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Error!'
      });
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error!'));
  });
})