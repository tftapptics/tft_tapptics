import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage';
import Champions from '../Champions/Champions';
import Items from '../Items/Items';
import TeamBuilder from '../TeamBuilder/TeamBuilder';
import Synergies from '../Synergies/Synergies';
import NoMatch from '../../components/NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>TFTapptics</h1>
        <MainPage />
      </header>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/team-builder" component={TeamBuilder} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/champions" component={Champions} />
        <Route exact path="/synergies" component={Synergies} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    )
  }
}

export default App;
