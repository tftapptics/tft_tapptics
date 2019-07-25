import React from 'react';
import { shallow } from 'enzyme';
import SynergyStats from './SynergyStats';

describe('SynergyStats', () => {

  let wrapper;
  let name = 'Tristana';
  let thumbnail = 'www.fakeurl.com';
  let roster = [{attributes: {name: 'Nidalee', origin_class_types: ['Wild'] }}]

  beforeEach(() => {
    wrapper = shallow(<SynergyStats name={name} thumbnail={thumbnail} roster={roster} />)
  });

  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});