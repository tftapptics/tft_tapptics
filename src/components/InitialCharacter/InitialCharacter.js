import React from 'react';
import ReactTooltip from 'react-tooltip';

const InitialCharacter = (prop) => {
  const {name, img, synergy} = prop
  return (
    <div className='images'>
      <a data-tip data-for={name}>
        <img className='car-imgs' src={img} />
      </a>
      <ReactTooltip id={name} type='dark' >
          <li>{name}</li>
          <li>{synergy}</li>
      </ReactTooltip>
    </div>
  )
}

export default InitialCharacter;
