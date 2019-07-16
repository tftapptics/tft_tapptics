import React from 'react';
import { shallow } from 'enzyme';
import ChosenDisplay from './ChosenDisplay';

describe('ChosenDisplay', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChosenDisplay />);
  });

  it('should match the snapshot iwth all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});