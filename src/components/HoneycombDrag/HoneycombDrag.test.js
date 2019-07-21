import React from 'react';
import { shallow } from 'enzyme';
import HoneycombDrag from './HoneycombDrag';

describe('HoneycombDrag', () => {

  let wrapper;
  let champs = [{attributes: { data: { name: 'Vayne' } } }]

  beforeEach(() =>{
    wrapper = shallow(<HoneycombDrag champions={champs} />);
  });

  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});