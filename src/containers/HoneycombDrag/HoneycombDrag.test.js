import React from 'react';
import { shallow } from 'enzyme';
import HoneycombDrag from './HoneycombDrag';

describe('HoneycombDrag', () => {

  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<HoneycombDrag />);
  });

  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});