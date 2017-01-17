import React, {Component} from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
			<div className="navbar">
				<Link to='/home' className='nav-tags'>HOME |</Link>
				<Link to='/about' className='nav-tags'>ABOUT VIPASSANA |</Link>
				<Link to='/about' className='nav-tags'>COURSE INFORMATION |</Link>
				<Link to='/about' className='nav-tags'>ABOUT THE CENTER |</Link>
				<Link to='/about' className='nav-tags'>OLD STUDENT WEBSITE |</Link>
				<Link to='/about' className='nav-tags'>CONTACT US</Link>
			</div>
    );
  }
}

export default Navbar;