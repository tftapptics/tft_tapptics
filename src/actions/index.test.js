import * as actions from './index';

describe('actions', () => {

  it('should return a boolean value for a type of IS_LOADING', () => {
    const expected = { type: 'IS_LOADING', isLoading: true };
    const result = actions.isLoading(true);

    expect(result).toEqual(expected);
  });

  it('should return a message in case of an error', () => {
    const expected = { type: 'SET_ERROR', message: 'Error!'};
    const result = actions.setError('Error!');

    expect(result).toEqual(expected);
  });

  it('should return all champions', () => {
    const expected = {type: 'SET_CHAMPIONS', champs: {name: 'Warwick'}};
    const result = actions.setChampions({name: 'Warwick'});

    expect(result).toEqual(expected);
  })
});