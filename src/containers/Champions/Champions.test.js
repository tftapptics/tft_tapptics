import React from 'react';
import { shallow } from 'enzyme';
import { Champions, mapStateToProps } from './Champions';

describe('Champions', () => {

  let wrapper;
  let mockChampions = [{
    id: 1,
    attributes: {
    data: {
      health: [],
      ability_info: {
        attributes: [{damage: [] }],
      }
    },
    origin_class_type: {
    data: [{
      attributes: {
        data: {
    tier_info: [], tiers: [],
        }
      }
    }]
  }
}}]

  beforeEach(() => {
    wrapper = shallow(<Champions champions={mockChampions} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle open modals', () => {
    wrapper.setState({openModal: false});
    const e = { target: { id: 1 } }
    wrapper.instance().handleOpenModal(e);
    expect(wrapper.state('showModal')).toEqual(true);
  });

  it('should handle closed modals', () => {
    wrapper.setState({openModal: true});
    wrapper.instance().handleCloseModal();
    expect(wrapper.state('showModal')).toEqual(false);
  });

});

describe('mapStateToProps', () => {

  it('should return an object with the champions array', () => {
    const mockState = {
      champions: [{name: 'Varus'}]
    }
    const expected = {
      champions: [{name: 'Varus'}]
    }

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })
});