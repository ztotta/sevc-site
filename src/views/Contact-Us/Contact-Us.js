import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');

const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#045fb4",
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto"
  }, 
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		backgroundColor: "#ffffbe",
		borderRadius: '5px'
  },
	h3: {
		margin: "auto"
	}
}

class ContactUs extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Information</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, explicabo ab esse aspernatur minus provident architecto atque quisquam molestiae vitae tempore officiis voluptatum corrupti, asperiores. Aspernatur aut quo ipsa nobis.
						</p>
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Registration</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							Adult Course E-Mail: <a href="">registration@patapa.dhamma.org</a>
							<br/>Children's/Teen's Course E-Mail: <a href="">childrens-course@patapa.dhamma.org</a>
							<br/><br/>
							Dhamma Patāpa is owned and operated by South East Vipassana Association, Inc., a 501(c)3 non-profit organization
						</p>
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Mailing Address</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
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
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}><Link to='/'>Home</Link></h3>
					</Cell>
				</Grid>
			</StyleRoot>
    );
  }
}

export default ContactUs;