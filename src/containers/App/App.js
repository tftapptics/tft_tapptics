import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Champions from '../Champions/Champions';
import Items from '../Items/Items';
import Synergies from '../Synergies/Synergies';
import NoMatch from '../../components/NoMatch/NoMatch';
import CharacterDisplay from '../../components/CharacterDisplay/CharacterDisplay';
import Header from '../../components/Header/Header';
import Carousel from '../Carousel/Carousel'
import ChosenDisplay from '../ChosenDisplay/ChosenDisplay';
import { fetchChampions } from '../../thunks/fetchChampions';


class App extends Component {

  componentDidMount() {
    // this.props.fetchChampions('https://tft-backend.herokuapp.com/api/v1/champions')
    fetch('https://tft-backend.herokuapp.com/api/v1/champions')
    .then(res => console.log(res))

  }
  


  render() {
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ChosenDisplay} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/champions" component={Champions} />
        <Route exact path="/synergies" component={Synergies} />
        <Route exact path='/details' component={CharacterDisplay} />
        <Route exact path='/carousel' component={Carousel} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    )
  }
}

export const mapStateToProps = state => ({
  champions: state.champions
});

export const mapDispatchToProps = dispatch => ({
  fetchChampions: url => dispatch(fetchChampions(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);