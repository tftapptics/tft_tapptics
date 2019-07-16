import * as actions from './index';

describe('actions', () => {

  it('should return a boolean value for a type of IS_LOADING', () => {
    const expected = { type: 'IS_LOADING', isLoading: true };
    const result = actions.isLoading(true);

    expect(result).toEqual(expected);
  })
})