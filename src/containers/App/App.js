import React, { Component } from 'react'
import MainPage from '../MainPage'

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
        <Route exact path="/teams" component={teams} />
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
