import React from 'react';
import { shallow } from 'enzyme';
import Honeycomb from './Honeycomb';

describe('Honeycomb', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Honeycomb />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});