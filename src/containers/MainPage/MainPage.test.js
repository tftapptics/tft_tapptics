import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './index';

describe('MainPage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainPage/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});