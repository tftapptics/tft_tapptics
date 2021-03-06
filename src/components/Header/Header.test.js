import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});