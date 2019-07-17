import React from 'react';
import { shallow } from 'enzyme';
import Stats from './Stats';

describe('Stats', () => {

  let wrapper;
  let mockCurrentTeam = [{name: 'Twisted Fate', health: 400, dmg: 72}]

  beforeEach(() => {
    wrapper = shallow(<Stats currentTeam={mockCurrentTeam}/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});