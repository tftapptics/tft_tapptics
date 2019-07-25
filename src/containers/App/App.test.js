import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchChampions } from '../../thunks/fetchChampions';
import { fetchSynergies } from '../../thunks/fetchSynergies';
import { fetchItems } from '../../thunks/fetchSynergies';

jest.mock('../../thunks/fetchChampions');
jest.mock('../../thunks/fetchSynergies');
jest.mock('../../thunks/fetchItems');


  let mockChamps = [{
    "id": "1",
    "type": "champions",
    "attributes": {
        "data": {
            "id": 1,
            "name": "Aatrox, the Darkin Blade",
            "champion_thumbnail": "https://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/Aatrox.png",
            "cost": 3,
            "health": [
                650,
                1170,
                2340
            ],
            "dmg": 65,
            "armor": 25,
            "mr": 20,
            "atk_spd": 0.65,
            "range": "■□□□",
            "ability_thumbnail": "https://raw.communitydragon.org/latest/game/assets/characters/aatrox/hud/icons2d/aatrox_q3.png",
            "ability_info": {
                "title": "The Darkin Blade",
                "attributes": [
                    {
                        "damage": [
                            300,
                            500,
                            700
                        ]
                    }
                ],
                "descrption": "Aatrox cleaves the area in front of him, dealing damage to enemies inside it"
            },
            "model_img": null,
            "created_at": "2019-07-18T23:35:03.507Z",
            "updated_at": "2019-07-18T23:35:03.507Z"
        },
        "origin_class_type": {
            "data": [
                {
                    "id": "2",
                    "type": "origin_class_type",
                    "attributes": {
                        "data": {
                            "id": 2,
                            "name": "Blademaster",
                            "thumbnail": "https://img.rankedboost.com/wp-content/plugins/league/assets/tft/Blademaster.png",
                            "summary": "Blademasters have a chance to strike additional times each attack.",
                            "tier_info": [
                                " (2)  Blademasters 35% chance to strike 1 additional attack",
                                " (4)  Blademasters 35% chance to strike 2 additional"
                            ],
                            "tiers": [
                                2,
                                4
                            ],
                            "created_at": "2019-07-18T23:35:03.305Z",
                            "updated_at": "2019-07-18T23:35:03.305Z"
                        }
                    }
                },
                {
                    "id": "11",
                    "type": "origin_class_type",
                    "attributes": {
                        "data": {
                            "id": 11,
                            "name": "Demon",
                            "thumbnail": "https://img.rankedboost.com/wp-content/plugins/league/assets/tft/Demon.png",
                            "summary": "Attacks from Demons have a chance on hit to burn all of an enemy's mana and deal that much as true damage.",
                            "tier_info": [
                                " (2)  Demons have a 40% Chance on Hit to Mana Burn",
                                " (4)  Demons have a 60% Chance on Hit to Mana Burn",
                                " (6)  Demons have a 80% Chance on Hit to Mana Burn"
                            ],
                            "tiers": [
                                2,
                                4,
                                6
                            ],
                            "created_at": "2019-07-18T23:35:03.379Z",
                            "updated_at": "2019-07-18T23:35:03.379Z"
                        }
                    }
                }
            ]
        }
    }
}]

describe('App', () => {
  
  describe('Container', () => {
    let mockFunc;
    let mockFetchSynergies;
    let mockFetchItems;
    let mockFetchRecipes;
    let wrapper;

    beforeEach(() => {
      mockFunc = jest.fn()
      mockFetchSynergies = jest.fn();
      mockFetchItems = jest.fn();
      mockFetchRecipes = jest.fn();
      wrapper = shallow(<App champions={mockChamps}
                             fetchChampions={mockFunc}
                             fetchSynergies={mockFetchSynergies}
                             fetchItems={mockFetchItems}
                             fetchRecipes={mockFetchRecipes}
                             />);
    });


    it('should match the snapshot with all the data passed in', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => {
    let fetchItems = jest.fn();
    let mockDispatch = jest.fn();
    
    it('should call fetchChampions with the correct params', () => {
      let mockUrl = 'www.TFT.com';
      let mockDispatch = jest.fn();
      let actionsToDispatch = fetchChampions(mockUrl);
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchChampions(actionsToDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actionsToDispatch);
    });

    it('should call fetchItems with the correct params', () => {
        const mockState = {
            items: [{name: 'Golden Spatula'}]
          }

          const actionToDispatch = fetchItems(mockState);
          const mappedProps = mapDispatchToProps(mockDispatch);
          mappedProps.fetchItems(mockState);
          
          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

      it('should call fetchSynergies with the correct params', () => {
        const mockState = {
            items: [{name: 'Golden Spatula'}]
          }
        const actionToDispatch = fetchSynergies(mockState);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.fetchSynergies(mockState);
        
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
  }); 
});