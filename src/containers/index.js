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
			<SidebarItem><Link to='/about-vipassana'>About Vipassana</Link></SidebarItem>,
			<SidebarItem><Link to='/course-information'>Course Information</Link></SidebarItem>,
			<SidebarItem><Link to='/about-the-center'>About the Center</Link></SidebarItem>,
			<SidebarItem><a href='http://www.patapa.dhamma.org/old_student_login.shtml'>Old Student Website</a></SidebarItem>,
			<SidebarItem><Link to='/contact-us'>Contact Us</Link></SidebarItem>,
			<SidebarItem><Link to='/'><img src="http://www.patapa.dhamma.org/image/wheel.gif" /></Link></SidebarItem>,
			<SidebarItem><Link to='/'><img src="http://www.patapa.dhamma.org/image/bodhi.gif" /></Link></SidebarItem>
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