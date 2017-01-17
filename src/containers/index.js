import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class Index extends Component {
	render() {
    return (
			<div>
					<Header />
					<div className='App-main'>
						<div className='App-page-container'>
							{this.props.children}
						</div>
					</div>
					<Footer />
			</div>
    );
  }
}

export default Index;