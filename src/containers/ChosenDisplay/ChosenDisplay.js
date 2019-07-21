import React, { Component } from 'react'
import { HexGrid } from 'react-hexgrid';
import Honeycomb from '../../components/Honeycomb/Honeycomb';
import HoneycombDrag from '../../components/HoneycombDrag/HoneycombDrag';
import Stats from '../Stats/Stats';
import { connect } from 'react-redux';

class ChosenDisplay extends Component {
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
    return (
      <div className='chosen-display'>
        <section className="current-roster">
          <section className="Honeycomb-section">
            <HexGrid class="grid" width={1000} height={600} viewBox="-50 -50 100 100">
              <Honeycomb />
              <HoneycombDrag champions={this.props.champions}  />
            </HexGrid>
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

export const mapStateToProps = state => ({
  champions: state.champions
});

export default connect(mapStateToProps)(ChosenDisplay);