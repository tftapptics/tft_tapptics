import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import Honeycomb from '../../components/Honeycomb/Honeycomb';
import HoneycombDrag from '../../components/HoneycombDrag/HoneycombDrag';
import Stats from '../Stats/Stats';

export class ChosenDisplay extends Component {
  constructor() {
    super();
  }
  
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

    return (
      <div className='chosen-display'>
        <section className="current-roster">
          <section className="Honeycomb-section">
              {displayRoster}
          </section>
          <section className='honey-2'>
              {displayChamps}
          </section>
          <article className="team-stats">
            {displayRosterStats}
          </article>
          <article className="team-synergies">
            <h3>Current Synergies:</h3>
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