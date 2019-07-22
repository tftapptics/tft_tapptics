import React from 'react';
import { shallow } from 'enzyme';
import { Synergies } from './Synergies';

describe('Synergies', () => {

  let wrapper;
  let mockSynergies = [{ attributes: {name: 'Demon', thumbnail: '' } }];
  let mockChampions = [{ attributes: { name: 'Vayne', origin_class_types: ['Demon'] } }]

  beforeEach(() => {
    wrapper = shallow(<Synergies synergies={mockSynergies} champions={mockChampions} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});