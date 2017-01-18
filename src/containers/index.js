import React, { Component } from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { Link } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class Index extends Component {

	onCollapse() {
		return false
	}
	
	render() {
	
		let items = [
			<SidebarItem><Link to='home'>Home</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana' className='nav-tags'>About Vipassana</Link></SidebarItem>,
			<SidebarItem><Link to='/course-information' className='nav-tags'>Course Information</Link></SidebarItem>,
			<SidebarItem><Link to='/about-the-center' className='nav-tags'>About the Center</Link></SidebarItem>,
			<SidebarItem><Link to='/home' className='nav-tags'>Old Student Website</Link></SidebarItem>,
			<SidebarItem><Link to='/contact-us' className='nav-tags nav-tags-right'>Contact Us</Link></SidebarItem>
		];
		
    return (
			<div>
				<Sidebar content={items} 
						background={'white'} 
						breakPoint={980}
				>
					<Header />
					<div className='App-main'>
						<div className='App-page-container'>
							{this.props.children}
						</div>
					</div>
					<Footer />
  			</Sidebar>
			</div>
    );
  }
}

export default Index;