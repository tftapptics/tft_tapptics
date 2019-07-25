import React, { Component } from 'react';


export class SynergyStats extends Component {

  render () {
    let currentSynergies = this.props.roster.reduce((acc, champ) => {
        champ.attributes.origin_class_types.forEach(type => {
          if (type && !acc[type.name]) {
            acc[type.name] = 0
          }
          acc[type.name]++
        })
        return acc
      }, {})
  
      let bonuses = this.props.synergies.reduce((acc, syn) => {
        if (syn.attributes.tiers.includes(currentSynergies[syn.attributes.name])) {
          let index = syn.attributes.tiers.indexOf(currentSynergies[syn.attributes.name])
          acc.push(syn.attributes.tier_info[index])
        }
        return acc
      }, [])

    return (

      <article className="SynergyStats">
        {bonuses}
      </article>
    )
  }
}

export default SynergyStats;