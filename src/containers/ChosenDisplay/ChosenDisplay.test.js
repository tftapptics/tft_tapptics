import React from 'react';
import { shallow } from 'enzyme';
import { ChosenDisplay, mapStateToProps } from './ChosenDisplay';

describe('ChosenDisplay', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChosenDisplay />);
  });

  it('should match the snapshot iwth all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {

  it('should return an object with the champions array', () => {
    const mockState = {
      champions: [{name: 'Varus'}]
    };
    const expected = {
      champions: [{name: 'Varus'}]
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});