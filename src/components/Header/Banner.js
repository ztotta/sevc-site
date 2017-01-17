import React, {Component} from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
			<div className="banner">
				<Link to='/home'>
					<h1 className='name'>Southeast Vipassana Center</h1>
				</Link>
				<h3>Dhamma Patāpa</h3>
				<p>Offering courses in Vipassana Meditation as taught by S.N. GOENKA 
						in the tradition of Sayagyi U Ba Khin
				</p>
				<br/>
			</div>
    );
  }
}

export default Navbar;