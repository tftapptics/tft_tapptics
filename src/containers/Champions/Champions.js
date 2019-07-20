import React from 'react';
import { connect } from 'react-redux';


class Champions extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  render() {
    const displayChampions = this.props.champions.map(champ => (
        <article>
          <img src={champ.attributes.data.champion_thumbnail}/>
          <h3>{champ.attributes.data.name}</h3>
        </article>))
  
    return (
      <section className="Champions">
        <h3>All Champions</h3>
        {displayChampions}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  champions: state.champions
})

export default connect(mapStateToProps)(Champions)