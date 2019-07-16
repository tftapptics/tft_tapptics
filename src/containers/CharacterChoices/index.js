import React, { Component } from 'react'

export default class CharacterChoices extends Component {
  render() {
    return (
      <div className='character-choices'>
        {/* this is going to be the area where function components will be mapped over for display */}
        <img src='https://i.imgur.com/g3EiCSi.png' />
        <img src='https://i.imgur.com/so58O3K.png' />
        <img src='https://i.imgur.com/4ByqI3E.png' />
        <img src='https://i.imgur.com/AmeGHvR.png' />
        <img src='https://i.imgur.com/3Fj3uOv.png' />
      </div>
    )
  }
}
