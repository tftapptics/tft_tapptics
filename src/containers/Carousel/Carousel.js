import React, { Component } from 'react';
import InitialCharacter from '../../components/InitialCharacter/InitialCharacter'
import ReactTooltip from 'react-tooltip'


class Carousel extends Component {
  render() {
    return (
      <div className='full-car'>
        <h1 className='car-title'>Choose A Champion</h1>
        <div className='carousel'>
        <div className='images'>
          <a data-tip data-for='this-one'>
            <img className='car-imgs' src='https://i.imgur.com/9YG3Clp.png' />
          </a>
          <ReactTooltip id='this-one' type='success' >
              <span>IT WORKS SON!</span>
          </ReactTooltip>
          </div>
          <div className='images'>
          <a data-tip data-for='thistwo'>
            <img className='car-imgs' src='https://i.imgur.com/DMOVd7b.png' />
          </a>
          <ReactTooltip id='thistwo' type='success' >
              <span>DUUUUDE!</span>
          </ReactTooltip>
          </div>
          <div className='images'>
          <a data-tip data-for='this-three'>
            <img className='car-imgs' src='https://i.imgur.com/0keMK4n.png' />
          </a>
          <ReactTooltip id='this-three' type='success' >
              <span>DOG IM TELLIN YOU!</span>
          </ReactTooltip>
          </div>
          <div className='images'>
          <a data-tip data-for='this-4'>
            <img className='car-imgs' src='https://i.imgur.com/e08Gynb.png' />
          </a>
          <ReactTooltip id='this-4' type='success' >
              <span>BELIEVE ME</span>
          </ReactTooltip>
          </div>
          <div className='images'>
          <a data-tip data-for='this-5'>
            <img className='car-imgs' src='https://i.imgur.com/OdC7Spy.png' />
          </a>
          <ReactTooltip id='this-5' type='success' >
              <span>BELIEVE ME YET!??</span>
          </ReactTooltip>
        </div>
        <InitialCharacter />
      </div>
      </div>
    )
  }
}

export default Carousel;
