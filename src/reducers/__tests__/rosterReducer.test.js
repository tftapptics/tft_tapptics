import { setRoster } from '../rosterReducer';
import * as actions from '../../actions';

describe('setRoster', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = setRoster(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the roster', () => {
    const expected = [{name: 'Vayne'}, {name: 'Varus'}];
    const result = setRoster(undefined, actions.setRoster([{name: 'Vayne'}, {name: 'Varus'}]));

    expect(result).toEqual(expected);
  });
});