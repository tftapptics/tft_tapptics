import React from 'react';
import { shallow } from 'enzyme';
import { Synergies } from './Synergies';

describe('Synergies', () => {

  let wrapper;
  let mockSynergies = [{ attributes: {name: 'Demon', thumbnail: '' } }];
  let mockChampions = [{ attributes: { name: 'Vayne', origin_class_types: [{name: 'Demon'}] } }];
  let mockSynergy = {
    id: "1",
    type: "origin_class_type",
    attributes: {
      name: "Assassin",
      thumbnail: "https://img.rankedboost.com/wp-content/plugins/league/assets/tft/Assassin.png",
      summary: "Assassins leap to the farthest enemy at the start of combat. Assassins deal bonus Critical Strike Damage.",
      tier_info: [
        " (3) Assassins 150% Critical Strike Damage",
        " (6) Assassins 350% Critical Strike Damage"
        ],
      tiers: [3, 6]
    }
  }
  
  beforeEach(() => {
    wrapper = shallow(<Synergies synergies={mockSynergies} champions={mockChampions} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should handle open modals', () => {
    wrapper.setState({openModal: false});
    const e = { target: { id: 1 } }
    wrapper.setState({currentChoice: mockSynergy})
    wrapper.instance().handleOpenModal(e);
    expect(wrapper.state('showModal')).toEqual(true);
  });

  it('should handle closed modals', () => {
    wrapper.setState({openModal: true});
    wrapper.instance().handleCloseModal();
    expect(wrapper.state('showModal')).toEqual(false);
  });

});