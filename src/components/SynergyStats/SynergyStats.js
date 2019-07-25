import React from 'react';
import ReactTooltip from 'react-tooltip';


export default function SynergyStats({name, thumbnail, roster}) {

  const compareSynergies = arr => {
    // iterate over roster
    let synergies = arr.reduce((acc, champ) => {
      champ.attributes.origin_class_types.forEach(type => {
        if (type && !acc[type]) {
          acc[type] = 0
        }
        acc[type]++
      })
      return acc
    }, {})
    console.log(synergies)
    // have preset obj with all classes and origins
    // iterate over champ.origin_class_types
    // add to type.name value on obj
    // if type.tiers includes value,
      // get index
      // return tier_info at index into p tag
  }


  return (
    <article className="SynergyStats">
    {compareSynergies(roster)}
      <a data-tip data-for={thumbnail}>
        <img src={thumbnail} alt={name} />
      </a>
      <ReactTooltip id={thumbnail} type='dark' effect="float" className="modal-tooltip">
        <h6>{name}</h6>
      </ReactTooltip>
    </article>
  )
}





// assassin: 0,
//       blademaster: 0,
//       brawler: 0,
//       elementalist: 0,
//       guardian: 0,
//       gunslinger: 0,
//       knight: 0,
//       ranger: 0,
//       shapeshifter: 0,
//       sorcerer: 0,
//       demon: 0,
//       dragon: 0,
//       exile: 0,
//       glacial: 0,
//       robot: 0,
//       imperial: 0,
//       noble: 0,
//       ninja: 0,
//       pirate: 0,
//       phantom: 0,
//       wild: 0,
//       void: 0,
//       yordle: 0