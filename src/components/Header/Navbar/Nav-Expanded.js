import React, {Component} from 'react';
import { Link } from 'react-router';

class NavExpanded extends Component {
  render() {
    return (
			<div className='nav-expanded-wrapper'>
				<Link to='/home' className='nav-tags'>Home</Link>
				<Link to='/about-vipassana' className='nav-tags'>About Vipassana</Link>
				<Link to='/course-information' className='nav-tags'>Course Information</Link>
				<Link to='/about-the-center' className='nav-tags'>About the Center</Link>
				<Link to='/home' className='nav-tags'>Old Student Website</Link>
				<Link to='/contact-us' className='nav-tags nav-tags-right'>Contact Us</Link>
			</div>
    );
  }
}

export default NavExpanded;