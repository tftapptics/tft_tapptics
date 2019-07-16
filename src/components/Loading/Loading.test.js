import React from 'react';
import Loading from './Loading';
import { shallow } from 'enzyme';

describe('Loading', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});