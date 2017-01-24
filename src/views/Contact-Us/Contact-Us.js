import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');

const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import PageSectionHeader from '../../components/Pages/Page-Section-Header';
import PageSection from '../../components/Pages/Page-Section';
import HomeButton from '../../components/Pages/Home-Button';

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#045fb4",
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto"
  }
}

class ContactUs extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<PageSectionHeader title={'Information'} />
					<PageSection>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, explicabo ab esse aspernatur minus provident architecto atque quisquam molestiae vitae tempore officiis voluptatum corrupti, asperiores. Aspernatur aut quo ipsa nobis.
						</p>
					</PageSection>
					<PageSectionHeader title={'Registration'} />
					<PageSection>
						<p>
							Adult Course E-Mail: <a href="">registration@patapa.dhamma.org</a>
							<br/>Children's/Teen's Course E-Mail: <a href="">childrens-course@patapa.dhamma.org</a>
							<br/><br/>
							Dhamma Patāpa is owned and operated by South East Vipassana Association, Inc., a 501(c)3 non-profit organization
						</p>
					</PageSection>
					<PageSectionHeader title={'Mailing Address'} />
					<PageSection>
						<p>
							<i>For registration (confidential questionnaires), donations and financial matters:</i>
							<br/><br/> Southeast Vipassana Association
							<br/>P. O. Box 351
							<br/>Social Circle, GA 30025

							<br/>
							
							<br/><br/><i>For letters and/or packages for people at the Center:</i>
							<br/><br/>Southeast Vipassana Center  
							<br/>Dhamma Patāpa
							<br/>476 Rogers Break 
							<br/>Jesup, GA 31546
						</p>
					</PageSection>
					<HomeButton />
				</Grid>
			</StyleRoot>
    );
  }
}

export default ContactUs;