import { fetchData } from './fetchData';

describe('fetchData', () => {

  let mockUrl;
  let mockChampion;

  beforeEach(() => {
    mockUrl = 'www.tft.com';
    mockChampion = { name: 'T.F.', rarity: 2 };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockChampion)
      });
    });
  });

  it('should call fetch with the correct parameters', () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  });

  it('should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockChampion)
      });
    });

    expect(fetchData()).rejects.toEqual(Error());
  })
})