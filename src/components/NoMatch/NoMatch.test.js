import React from 'react';
import NoMatch from './NoMatch';
import { shallow } from 'enzyme';

describe('NoMatch', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoMatch />)
  });

  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});