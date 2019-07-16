import React from 'react';
import { shallow } from 'enzyme';
import Items from './Items';

describe('Items', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Items/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});