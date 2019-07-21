import React from 'react';
import ReactTooltip from 'react-tooltip';

const InitialCharacter = (prop) => {
  const {name, img, synergy, rarity} = prop
  return (
    <div className='images'>
      <a data-tip data-for={name}>
        <img className='car-imgs' src={img} />
      </a>
      <ReactTooltip id={name} type='dark' >
          <p className='tool-tip'>Name: {name}</p>
          <p className='tool-tip'>Synergy: {synergy}</p>
          <p className='tool-tip'>Rarity/Cost: {rarity}</p>
      </ReactTooltip>
    </div>
  )
}

export default InitialCharacter;
