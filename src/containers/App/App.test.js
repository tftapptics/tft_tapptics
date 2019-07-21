import React from 'react';
import { shallow } from 'enzyme';
import {App, mapDispatchToProps } from './App';
import { fetchChampions } from '../../thunks/fetchChampions';

jest.mock('../../thunks/fetchChampions')

describe('App', () => {

  let wrapper;
  let mockFetchChampions = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App fetchChampions={mockFetchChampions} />);
    
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
 
  let mockDispatch = jest.fn();

  it('should dispatch champions on the call of fetchChampions',() => {
    const mockState = {
      champions: [{name: 'Blitzcrank'}]
    }
    const actionToDispatch = fetchChampions(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchChampions(mockState);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});