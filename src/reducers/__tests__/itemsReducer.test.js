import { items } from '../itemsReducer';
import * as actions from '../../actions';

describe('items', () => {

  it('should return the inital state', () => {
    const expected = [];
    const result = items(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return all items', () => {
    const expected = [{name: 'Tear of the Goddess'}];
    const result = items(undefined, actions.setItems([ {name: 'Tear of the Goddess'} ]));
    expect(result).toEqual(expected);
  });
});