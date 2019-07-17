import React from 'react';

const CharacterDisplay = () => {
  return (
    <div>
      <h4>Name</h4>
      <div className='champion-stats'>
        <p className='health'>Health:</p>
        <p className='mana'>Mana:</p>
        <p className='dmg'>Damage:</p>
        <p className='atk-speed'>Attack-Speed:</p>
      </div>
    </div>
  )
}

export default CharacterDisplay;