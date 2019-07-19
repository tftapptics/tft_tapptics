import React from 'react';
import { shallow } from 'enzyme';
import InitialCharacter from './InitialCharacter';

describe('Champions', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<InitialCharacter />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});