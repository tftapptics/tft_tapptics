import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Champions from '../Champions/Champions';
import Items from '../Items/Items';
import Synergies from '../Synergies/Synergies';
import NoMatch from '../../components/NoMatch/NoMatch';
import CharacterDisplay from '../../components/CharacterDisplay/CharacterDisplay';
import Header from '../../components/Header/Header';
import Carousel from '../Carousel/Carousel'


class App extends Component {


  render() {
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
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

export default App;