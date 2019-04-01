import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home, About, Util } from '../pages/Index'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/util' component={Util} />
      </div>
    );
  }
}

export default App;