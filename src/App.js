import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './App.css';
import Index from './containers/Index';
import Home from './views/Home/Home';
import About from './views/About/About';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={Index}>
					<IndexRoute component={Home} />
					<Route path='home' component={Home}></Route>
					<Route path='about' component={About}></Route>
				</Route>
			</Router>
    );
  }
}

export default App;
