import { fetchSynergies } from '../fetchSynergies';
import { isLoading, setError, setSynergies } from '../../actions';


describe('fetchSynergies', () => {

  let mockUrl;
  let mockSynergies;
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockUrl = 'www.lol.com';
    mockDispatch = jest.fn();
    mockSynergies = [{name: 'Yordle'}]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockSynergies
        })
      });
    });
    thunk = fetchSynergies(mockUrl);
  });

  it('should call fetchData with the correct params', () => {
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should dispatch isLoading(true)', async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it.skip('should dispatch setSynergies with the correct params', async () => {
    const thunk = fetchSynergies(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(fetchSynergies(mockSynergies))
  });

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
    });

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
  });
});