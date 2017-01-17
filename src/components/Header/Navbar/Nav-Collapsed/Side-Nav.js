import React, {Component} from 'react';
import {Link} from 'react-router';

class SideNav extends Component {
	
	constructor(props) {
		super(props);
		
	}

	
  render() {
		
    return (
			<div className='side-nav-links'>
				<Link to='/'><div>OPTION</div></Link>	
				<Link to='/'><div>OPTION</div></Link>	
				<Link to='/'><div>OPTION</div></Link>	
				<Link to='/'><div>OPTION</div></Link>	
				<Link to='/'><div>OPTION</div></Link>	
			</div>
    );
  }
}

export default SideNav;