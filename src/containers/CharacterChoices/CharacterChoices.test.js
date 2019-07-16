import React from 'react';
import { shallow } from 'enzyme';
import CharacterChoices from './CharacterChoices';

describe('CharacterChoices', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterChoices />)
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
});