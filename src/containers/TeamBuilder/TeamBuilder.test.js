import React from 'react';
import { shallow } from 'enzyme';
import TeamBuilder from './TeamBuilder';

describe('TeamBuilder', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TeamBuilder/>);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});