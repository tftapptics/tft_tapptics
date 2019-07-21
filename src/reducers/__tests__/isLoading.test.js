import { isLoading } from '../isLoading';
import * as actions from '../../actions';

describe('isLoading', () => {

  it('should return an initial state', () => {
    const expected = false;
    const result = isLoading(undefined, false);

    expect(result).toEqual(expected);
  });

  it('should return a truthy value in case of loading', () => {
    const expected = true;
    const result = isLoading(undefined, actions.isLoading(true));

    expect(result).toEqual(expected);
  });

  it('should return a falsy value in case of not loading', () => {
    const expected = false;
    const result = isLoading(undefined, actions.isLoading(false));

    expect(result).toEqual(expected);
  });
});