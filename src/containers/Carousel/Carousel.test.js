import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';

describe('Champions', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});