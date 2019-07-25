import { setRoster } from '../rosterReducer';
import * as actions from '../../actions';

describe('setRoster', () => {

  let initialState = {
    attributes: {
      model_img: '',
      origin_class_types: []
    }
  }

  it('should return the initial state', () => {
    const expected = initialState;
    const result = setRoster(undefined, initialState);

    expect(result[0]).toEqual(expected);
  });

  it('should return the roster', () => {
    const expected = [{name: 'Vayne'}, {name: 'Varus'}];
    const result = setRoster(undefined, actions.setRoster([{name: 'Vayne'}, {name: 'Varus'}]));

    expect(result).toEqual(expected);
  });
});