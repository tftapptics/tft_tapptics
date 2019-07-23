import React from 'react';
import { shallow } from 'enzyme';
import Items from './Items';

describe('Items', () => {

  let wrapper;
  let mockItems = [{ attributes: { name: 'BF Sword'} }]

  beforeEach(() => {
    wrapper = shallow(<Items items={mockItems} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});