import React, { Component } from 'react'
import { HexGrid } from 'react-hexgrid';
import Honeycomb from '../Honeycomb/Honeycomb';
import HoneycombDrag from '../HoneycombDrag/HoneycombDrag';
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
          dmg: 260,
          img: 'https://i.imgur.com/3Fj3uOv.png'
        }
      ]
    }
  }

  handleClick = (e) => {
    let level = this.state.level
    e.target.className.includes('caret-up') ? level++ : level--
    this.setState({level})
  }
  
  render() {
    return (
      <div className='chosen-display'>
        <section className="choose-level">
          <h2>Level: {this.state.level}</h2>
          <div className="level-btns">
            <button className="caret-up" onClick={e => this.handleClick(e)} ><i class="fas fa-caret-up"></i></button>
            <button onClick={e => this.handleClick(e)}><i class="fas fa-caret-down"></i></button>
          </div>
        </section>
        <section className="current-roster">
          <section className="Honeycomb-section">
            {/* <HexGrid width={1000} height={600} viewBox="-50 -50 100 100"> */}
              <Honeycomb />
              <HoneycombDrag />
            {/* </HexGrid> */}
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
