import React, { Component } from 'react';
import ChosenDisplay from '../ChosenDisplay/ChosenDisplay';
import CharacterChoices from '../CharacterChoices/CharacterChoices'

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <ChosenDisplay />
        <CharacterChoices />
      </div>
    )
  }
}
