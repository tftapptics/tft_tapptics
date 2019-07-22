import React, { Component } from 'react';
import InitialCharacter from '../../components/InitialCharacter/InitialCharacter';
import { connect } from 'react-redux'

export class Carousel extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const filteredHeroes = this.props.champions.filter( champion => {
      return champion.attributes.cost <= 2
    })
    const initialHeroes = filteredHeroes.map(hero => <InitialCharacter key={hero.attributes.name} 
                                                                       name={hero.attributes.name}
                                                                       img={hero.attributes.model_img}
                                                                       synergies={hero.attributes.origin_class_types} 
                                                                       rarity={hero.attributes.cost}/>)
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
