import React, {Component} from 'react';
import Banner from './Banner';
import Navbar from './Navbar/Navbar';

class Header extends Component {
  render() {
    return (
			<div className="App-header">
				<Banner />
			</div>
    );
  }
}

export default Header;