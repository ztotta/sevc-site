import React, {Component} from 'react';
import SideNav from './Side-Nav';

class NavCollapsed extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			menuActive: false
		}
	}
	
	toggleMenu() {
		this.setState({
			menuActive: !this.state.menuActive
		})
	}

	
  render() {
		let menuClasses = ['side-nav-inactive'];
		
		if (this.state.menuActive) {
			menuClasses.splice(0);
			menuClasses.push('side-nav-active');
		}
		
    return (
			<div className='nav-collapsed'>
				<SideNav className={menuClasses.join(' ')} />
				<span onClick={this.toggleMenu.bind(this)} className='nav-hamburger'>|||</span>
			</div>
    );
  }
}

export default NavCollapsed;