import { synergies } from '../synergiesReducer';
import * as actions from '../../actions';

describe('synergies', () => {
  
  it('should return a default state', () => {
    const expected = [];
    const result = synergies(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return all synergies', () => {
    const expected = [{name:'Sorcerer'}];
    const result = synergies(undefined, actions.setSynergies([{name:'Sorcerer'}]));
    expect(result).toEqual(expected);
  });
})