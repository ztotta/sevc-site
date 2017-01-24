import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './App.css';
import Index from './containers/Index';

import AboutSNGoenka from './views/About-Vipassana/About-SN-Goenka';
import AboutTheCenter from './views/About-the-Center/About-the-Center';
import AboutVipassana from './views/About-Vipassana/About-Vipassana';
import ArtOfLiving from './views/About-Vipassana/Art-Of-Living';
import CodeOfDiscipline from './views/Course-Information/Code-Of-Discipline';
import CourseInformation from './views/Course-Information/Course-Information';
import ContactUs from './views/Contact-Us/Contact-Us';
import FAQ from './views/About-Vipassana/FAQ';
import HistoryOfSEVC from './views/About-the-Center/History-Of-SEVC';
import Home from './views/Home/Home';
import PhotosOfSEVC from './views/About-the-Center/Photos-Of-SEVC';
import WhatIsVipassana from './views/About-Vipassana/What-Is-Vipassana';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={Index}>
					<IndexRoute component={Home} />
					<Route path='home' component={Home}></Route>
					{/* ABOUT THE CENTER ROUTES */}
					<Route path='about-the-center' component={AboutTheCenter}></Route>
					<Route path='history-of-sevc' component={HistoryOfSEVC}></Route>
					<Route path='photos-of-sevc' component={PhotosOfSEVC}></Route>
					{/* ABOUT VIPASSANA ROUTES */}
					<Route path='about-vipassana' component={AboutVipassana}></Route>
					<Route path='what-is-vipassana' component={WhatIsVipassana}></Route>
					<Route path='art-of-living' component={ArtOfLiving}></Route>
					<Route path='about-sn-goenka' component={AboutSNGoenka}></Route>
					<Route path='FAQ' component={FAQ}></Route>
					<Route path='contact-us' component={ContactUs}></Route>
					{/* COURSE INFORMATION ROUTES */}
					<Route path='course-information' component={CourseInformation}></Route>
					<Route path='code-of-discipline' component={CodeOfDiscipline}></Route>
				</Route>
			</Router>
    );
  }
}

export default App;
