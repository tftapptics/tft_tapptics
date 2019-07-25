import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Champions from '../Champions/Champions';
import Items from '../Items/Items';
import { Synergies } from '../Synergies/Synergies';
import NoMatch from '../../components/NoMatch/NoMatch';
import CharacterDisplay from '../../components/CharacterDisplay/CharacterDisplay';
import Header from '../../components/Header/Header';
import Carousel from '../Carousel/Carousel'
import ChosenDisplay from '../ChosenDisplay/ChosenDisplay';
import { fetchChampions } from '../../thunks/fetchChampions';
import { fetchSynergies } from '../../thunks/fetchSynergies';
import { fetchItems } from '../../thunks/fetchItems';
import { fetchRecipes } from '../../thunks/fetchRecipes';



export class App extends Component {

  componentDidMount() {
    this.props.fetchChampions('https://tft-backend.herokuapp.com/api/v1/champions');
    this.props.fetchSynergies('https://tft-backend.herokuapp.com/api/v1/origin_class_type');
    this.props.fetchItems('https://tft-backend.herokuapp.com/api/v1/raw_items');
    this.props.fetchRecipes('https://tft-backend.herokuapp.com/api/v1/recipes');
  }
  


  render() {
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/champions" component={Champions} />
        <Route exact path="/synergies" render={() => <Synergies champions={this.props.champions}
        synergies={this.props.synergies} />} />
        <Route exact path='/details' component={CharacterDisplay} />
        <Route exact path='/Builder' component={ChosenDisplay} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    )
  }
}

App.propTypes = {
  champions: PropTypes.array
}

export const mapStateToProps = state => ({
  synergies: state.synergies,
  champions: state.champions
})

export const mapDispatchToProps = dispatch => ({
  fetchChampions: url => dispatch(fetchChampions(url)),
  fetchSynergies: url => dispatch(fetchSynergies(url)),
  fetchItems: url => dispatch(fetchItems(url)),
  fetchRecipes: url => dispatch(fetchRecipes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);