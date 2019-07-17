import React, { Component } from 'react'
import ChosenCharacter from '../../components/ChosenCharacters/ChosenCharacters';
import Honeycomb from '../Honeycomb/Honeycomb';
import Stats from '../Stats/Stats';

export default class ChosenDisplay extends Component {
  constructor() {
    super();
    this.state = {
      level: 0,
      currentTeam: [
        {
          name: 'vayne',
          health: 400,
          dmg: 260
        }
      ]
    }
  }
  
  render() {
    return (
      <div className='chosen-display'>
        <section className="choose-level">
          <h2>Current Level: {this.state.level}</h2>
          <button>-</button>
          <button>+</button>
        </section>
        <section className="current-roster">
          <section className="Honeycomb-section">
            <Honeycomb />
          </section>
          <article>
            <h3>Current Synergies:</h3>
            <h4>YORDLE</h4>
            <h4>SORCERER</h4>
          </article>
          <section>
            <Stats currentTeam={this.state.currentTeam} />
          </section>
        </section>
        {/* <ChosenCharacter /> */}
      </div>
    )
  }
}
