import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import Honeycomb from '../../components/Honeycomb/Honeycomb';
import HoneycombDrag from '../../components/HoneycombDrag/HoneycombDrag';
import Stats from '../Stats/Stats';

export class ChosenDisplay extends Component {
  constructor() {
    super();
    this.state = {
      currentTeam: [
        {
          name: 'vayne',
          health: 400,
          dmg: 260,
          img: 'https://i.imgur.com/3Fj3uOv.png'
        }
      ]
    }
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
      if(rost === {}){
        return <Honeycomb key={idx} idx={idx} rost={rost}/>
      } else {
        return <Honeycomb key={idx} idx={idx} rost={rost}/>
      }
    })

    return (
      <div className='chosen-display'>
        <section className="current-roster">
          <section className="Honeycomb-section">
              {displayRoster}
          </section>
          <section>
              {displayChamps}
          </section>
          <article className="team-stats">
            <Stats currentTeam={this.state.currentTeam} />
          </article>
          <article className="team-synergies">
            <h3>Current Synergies:</h3>
            <h4>YORDLE</h4>
            <h4>SORCERER</h4>
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