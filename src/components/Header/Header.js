import React, {Component} from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
			<div className="App-header">
				<Banner />
				<Navbar />
			</div>
    );
  }
}

export default Header;