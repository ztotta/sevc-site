import React, {Component} from 'react';
import { Link } from 'react-router';
import NavCollapsed from './Nav-Collapsed/Nav-Collapsed'
import NavExpanded from './Nav-Expanded';

class Navbar extends Component {
  render() {
    return (
			<div className="navbar">
				<NavExpanded />
				<NavCollapsed />
			</div>
    );
  }
}

export default Navbar;