import React from 'react';
import { shallow } from 'enzyme';
import Champions from './Champions';

describe('Champions', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Champions />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});