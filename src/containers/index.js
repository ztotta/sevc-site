import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

class Index extends Component {
  render() {
    return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
    );
  }
}

export default Index;