import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './App.css';
import Index from './containers/Index';
import Home from './views/Home/Home';
import AboutVipassana from './views/About-Vipassana/About-Vipassana';
import AboutTheCenter from './views/About-the-Center/About-the-Center';
import ContactUs from './views/Contact-Us/Contact-Us';
import CourseInformation from './views/Course-Information/Course-Information';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={Index}>
					<IndexRoute component={Home} />
					<Route path='home' component={Home}></Route>
					<Route path='about-the-center' component={AboutTheCenter}></Route>
					<Route path='about-vipassana' component={AboutVipassana}></Route>
					<Route path='contact-us' component={ContactUs}></Route>
					<Route path='course-information' component={CourseInformation}></Route>
				</Route>
			</Router>
    );
  }
}

export default App;
