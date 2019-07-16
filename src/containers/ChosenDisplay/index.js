import React, { Component } from 'react'
import ChosenCharacter from '../../components/ChosenCharacters'

export default class ChosenDisplay extends Component {
  render() {
    return (
      <div className='chosen-display'>
        <h2>Current level:1</h2>
        <ChosenCharacter />
      </div>
    )
  }
}
