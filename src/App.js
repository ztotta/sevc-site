import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import Index from './containers/index';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={Index}>
				</Route>
			</Router>
    );
  }
}

export default App;
