import React from 'react';
import { shallow } from 'enzyme';
import InitialCharacter from './InitialCharacter';

describe('Champions', () => {

  let wrapper;
  let mockName;
  let mockImg;
  let mockSyns;
  let mockRare;

  beforeEach(() => {
    mockName = 'Bob';
    mockImg = 'img.png';
    mockSyns = ['knight', 'warrior']
    mockRare = 2
    wrapper = shallow(<InitialCharacter name={mockName}
                                        img={mockImg}
                                        synergies={mockSyns} 
                                        rarity={mockRare}/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});