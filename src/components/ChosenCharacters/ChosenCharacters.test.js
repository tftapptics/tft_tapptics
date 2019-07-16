import React from 'react';
import ChosenCharacters from './ChosenCharacters';
import { shallow } from 'enzyme';

describe('ChosenCharacters', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChosenCharacters />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});