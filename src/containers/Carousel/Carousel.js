import React, { Component } from 'react';
import InitialCharacter from '../../components/InitialCharacter/InitialCharacter'

class Carousel extends Component {
  render() {
    return (
      <div className='full-car'>
        <h1 className='car-title'>Choose A Champion</h1>
      <div className='carousel'>
        <div className='images'>
          <img className='car-imgs' src='https://i.imgur.com/9YG3Clp.png' />
        </div>
        <div className='images'>
          <img className='car-imgs' src='https://i.imgur.com/DMOVd7b.png' />
        </div>
        <div className='images'>
          <img className='car-imgs' src='https://i.imgur.com/0keMK4n.png' />
        </div>
        <div className='images'>
          <img className='car-imgs' src='https://i.imgur.com/e08Gynb.png' />
        </div>
        <div className='images'>
          <img className='car-imgs' src='https://i.imgur.com/OdC7Spy.png' />
        </div>
        <InitialCharacter />
      </div>
      </div>
    )
  }
}

export default Carousel;
