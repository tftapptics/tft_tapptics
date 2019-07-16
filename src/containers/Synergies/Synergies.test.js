import React from 'react';
import { shallow } from 'enzyme';
import Synergies from './Synergies';

describe('Synergies', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Synergies/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});