import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';


export class SynergyStats extends Component {

  // const compareSynergies = arr => {
  //   // iterate over roster
  //   let currentSynergies = arr.reduce((acc, champ) => {
  //   // iterate over champ.origin_class_types
  //     champ.attributes.origin_class_types.forEach(type => {
  //       if (type && !acc[type.name]) {
  //         acc[type.name] = 0
  //       }
  //   // add to type.name value on obj
  //       acc[type.name]++
  //     })
  //     return acc
  //   }, {})
  //   console.log(currentSynergies)

  //   let bonuses = synergies.reduce((acc, syn) => {
  //     if (syn.attributes.tiers.includes(currentSynergies[syn.attributes.name])) {
  //       acc.push(currentSynergies[syn.attributes.name])
  //     }
  //     return acc
  //   }, [])
  //   console.log(bonuses)
  //   // if type.tiers includes value,
  //     // get index
  //     // return tier_info at index into p tag
  // }

  render () {

    let currentSynergies = this.props.roster.reduce((acc, champ) => {
      // iterate over champ.origin_class_types
        champ.attributes.origin_class_types.forEach(type => {
          if (type && !acc[type.name]) {
            acc[type.name] = 0
          }
      // add to type.name value on obj
          acc[type.name]++
        })
        return acc
      }, {})
      console.log(currentSynergies)
  
      let bonuses = this.props.synergies.reduce((acc, syn) => {
        if (syn.attributes.tiers.includes(currentSynergies[syn.attributes.name])) {
          let index = syn.attributes.tiers.indexOf(currentSynergies[syn.attributes.name])
          acc.push(syn.attributes.tier_info[index])
        }
        return acc
      }, [])
      console.log(bonuses)

    return (
  
      
      <article className="SynergyStats">
      {/* {compareSynergies(this.props.roster)} */}
        {/* <a data-tip data-for={thumbnail}>
          <img src={thumbnail} alt={name} />
        </a>
        <ReactTooltip id={thumbnail} type='dark' effect="float" className="modal-tooltip">
          <h6>{name}</h6>
        </ReactTooltip> */}
        {bonuses}
      </article>
    )
  }
}

export default SynergyStats;



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