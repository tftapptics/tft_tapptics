import React from 'react';
import SynergyIcons from '../SyngeryIcons/SyngeryIcons'
import backgroundImage from '../../assets/images/wallpaper.jpg'

const CharacterDisplay = () => {
  return (
    <div className='char-display'>
      <div className='champion-img-area'>
        <h4 className='name'>Name</h4>
        <img className='champ-img' src='#' alt='Image of Champion' />
      </div>
      <div className='stats-syn'>
        <div className='champion-stats'>
          <p className='stats-title'>Stats</p>
          <p className='health stat'>Health:</p>
          <p className='mana stat'>Mana:</p>
          <p className='dmg stat'>Damage:</p>
          <p className='atk-speed stat'>Attack-Speed:</p>
        </div>
        <div className='synergies-area'>
          <SynergyIcons />
        </div>
      </div>
      {/* <button className='back'>Back Button</button> */}
    </div>
  )
}

export default CharacterDisplay;