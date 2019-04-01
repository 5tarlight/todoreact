import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home, About, Util, Todo } from '../pages/Index'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/util' component={Util} />
        <Route exact path='/todo' component={Todo} />
      </div>
    );
  }
}

export default App;