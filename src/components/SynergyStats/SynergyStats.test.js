import React from 'react';
import { shallow } from 'enzyme';
import SynergyStats from './SynergyStats';

describe('SynergyStats', () => {

  let wrapper;
  let name = 'Tristana';
  let thumbnail = 'www.fakeurl.com';
  let roster = [{attributes: {name: 'Nidalee', origin_class_types: ['Wild'] }}]
  let synergies = [{attributes: {name: 'wild', tiers: [2, 4], tier_info: ['50% chance to gain awesomeness', '2% chance to gain eternal life'] }}]

  beforeEach(() => {
    wrapper = shallow(<SynergyStats name={name} thumbnail={thumbnail} roster={roster} synergies={synergies} />)
  });

  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});