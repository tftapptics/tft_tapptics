import React, { Component } from 'react';
import InitialCharacter from '../../components/InitialCharacter/InitialCharacter';
import { connect } from 'react-redux'

export class Carousel extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const filteredHeroes = this.props.champions.filter( champion => {
      return champion.attributes.data.cost <= 2
    })
    const initialHeroes = filteredHeroes.map(hero => <InitialCharacter key={hero.attributes.data.name} 
                                                                       name={hero.attributes.data.name}
                                                                       img={hero.attributes.data.champion_thumbnail}
                                                                       synergy={hero.attributes.origin_class_type.data[0].attributes.data.name} />)
    return (
      <div className='full-car'>
        <h1 className='car-title'>Choose A Champion</h1>
        <div className='carousel'>
          {initialHeroes}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  champions: state.champions
})

export default connect(mapStateToProps)(Carousel)
