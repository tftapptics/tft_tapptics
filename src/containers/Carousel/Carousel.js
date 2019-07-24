import React, { Component } from 'react';
import InitialCharacter from '../../components/InitialCharacter/InitialCharacter';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { upDateRosterInfo } from '../../actions'

export class Carousel extends Component {
  constructor(props) {
    super(props);
    
  }

  findHero = (id) => {
    const initialId = this.props.champions.find( champion => {
      return champion.id === id
    })

    this.props.updateRoster(0, initialId)
  }


  
  render() {
    const filteredHeroes = this.props.champions.filter( champion => {
      return champion.attributes.cost <= 2
    })
    const initialHeroes = filteredHeroes.map(hero => <NavLink className='images' to='/Builder' onClick={() => this.findHero(hero.id)}>
                                                      <InitialCharacter key={hero.attributes.name} 
                                                                        name={hero.attributes.name}
                                                                        img={hero.attributes.model_img}
                                                                        synergies={hero.attributes.origin_class_types} 
                                                                        rarity={hero.attributes.cost}/>
                                                      </NavLink>)
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

const mapDispatchToProps = (dispatch) => ({
  updateRoster: (index, charIdx) => dispatch(upDateRosterInfo(index, charIdx))
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
