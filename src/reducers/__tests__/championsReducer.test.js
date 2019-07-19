import { champions } from '../championsReducer';
import * as actions from '../../actions';

describe('champions', () => {

  it('should return a default state', () => {
    const expected = [];
    const result = champions(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return all champions', () => {
    const expected = {name: 'Kassadin'};
    const result = champions('', actions.setChampions({name: 'Kassadin'}));
    expect(result).toEqual(expected);
  })
});