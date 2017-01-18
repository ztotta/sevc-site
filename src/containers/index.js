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
			<SidebarItem><Link to='home'>HOME</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>ABOUT VIPASSANA</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>what is vipassana?</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>art of living</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>vipassana video</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>about S.N. Goenka</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>FAQs</Link></SidebarItem>,
			<SidebarItem><Link to='/about-vipassana'>international website</Link></SidebarItem>,
			<SidebarItem><Link to='/course-information'>Course Information</Link></SidebarItem>,
			<SidebarItem><Link to='/about-the-center'>About the Center</Link></SidebarItem>,
			<SidebarItem><Link to='/home'>Old Student Website</Link></SidebarItem>,
			<SidebarItem><Link to='/contact-us'>Contact Us</Link></SidebarItem>
		];
		
    return (
			<div>
				<Sidebar content={items} 
						background={'white'} 
						breakPoint={980}
						toggleIconColor={'#045fb4'}
						activeHightlight={'#045fb4'}
						width={200}
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