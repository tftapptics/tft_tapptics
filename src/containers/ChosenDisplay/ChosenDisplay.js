import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import Honeycomb from '../../components/Honeycomb/Honeycomb';
import HoneycombDrag from '../../components/HoneycombDrag/HoneycombDrag';
import Stats from '../../components/Stats/Stats';
import SynergyStats from '../../components/SynergyStats/SynergyStats';

export class ChosenDisplay extends Component {
  
  render() {
    const displayChamps = this.props.champions.map( (champion, idx) => {
      return <HoneycombDrag key={champion.attributes.name}
                            id={champion.id}
                            idx={idx}
                            name={champion.attributes.name}
                            image={champion.attributes.champion_thumbnail} />
    });

    const displayRoster = this.props.roster.map( (rost, idx) => {
        return <Honeycomb key={idx} idx={idx} img={rost.attributes.model_img}/>
    })

    const currentRoster = this.props.roster.filter( hero => {
      return hero.attributes.model_img !== ''
    })

    const displayRosterStats = currentRoster.map( rost => {
      const firstName = rost.attributes.name.split(',')[0]
      return <Stats health={rost.attributes.health[0]}
                    dmg={rost.attributes.dmg}
                    img={rost.attributes.champion_thumbnail}
                    name={firstName} />
    } )

    const displaySynergyStats = currentRoster.map(r => {
        return r.attributes.origin_class_types.map(type => {
            return <SynergyStats name={type.name} thumbnail={type.thumbnail} roster={this.props.roster} />
        })
      })

    return (
      <div className='chosen-display'>
        <section className="current-roster">
          <section className="Honeycomb-section">
              {displayRoster}
          </section>
          <section className='honey-2'>
            <h2 className='drag-title'>Drag Your Selection!</h2>
              {displayChamps}
          </section>
          <article className="team-stats">
            <h2 className='stats-title'>Current Roster:</h2>
            {displayRosterStats}
          </article>
          <article className="team-synergies">
            <h3>Current Synergies:</h3>
            {displaySynergyStats}
          </article>
        </section>
      </div>
    )
  }
}

ChosenDisplay.propTypes = {
  champions: PropTypes.array
}

export const mapStateToProps = state => ({
  champions: state.champions,
  roster: state.setRoster
});

export default connect(mapStateToProps)(ChosenDisplay);