import React from 'react';
import ReactTooltip from 'react-tooltip';

const InitialCharacter = (prop) => {
  const {name, img, synergies, rarity} = prop
  const displaySynergies = synergies.map( synergy => <p className='tool-tip'>{synergy.name} </p>)
  return (
    <div className='images'>
      <a data-tip data-for={name}>
        <img className='car-imgs' src={img} />
      </a>
      <ReactTooltip id={name} type='dark' >
          <p>Name: {name}</p>
          <p className='tool-tip'>Synergy: {displaySynergies}</p>
          <p >Rarity/Cost: {rarity}</p>
      </ReactTooltip>
    </div>
  )
}

export default InitialCharacter;
