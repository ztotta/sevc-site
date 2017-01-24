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

class HistoryOfSEVC extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>History of the Southeast Vipassana Center</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							The Southeast Vipassana Center, Dhamma Patāpa - "The Majesty of Dhamma” is one of more than 100 Centers worldwide and the ninth Center in North America offering courses in Vipassana Meditation taught by S.N. Goenka and his Assistant Teachers in the tradition of Sayagyi U Ba Khin.

							<br/><br/>The Southeast Vipassana Center is located in southeastern Georgia in Wayne County, ten miles south of the small town of Jesup, Georgia. It is approximately 70 miles southwest of Savannah, Georgia, 90 miles north of Jacksonville, Florida, and 250 miles southeast from Atlanta, Georgia. Set in a secluded rural area and surrounded by forty acres of beautiful pine, oak, and mixed hardwood forests, the Center provides an ideal meditation environment for Vipassana students in the Southeast.

							<br/><br/>The first Vipassana course in the southeastern US was held in Stark, Florida in May of 1993, with a second course in December of 1993. From 1994 to 2007, Camp Marywood in Switzerland, Florida, was rented twice a year for ten-day courses. Courses at rented facilities have also been held in Atlanta, Georgia, and Chapel Hill, North Carolina. During these fourteen years, Vipassana students in this area looked forward to the establishment of a permanent Center to offer courses throughout the year.

							<br/><br/>In 2004 the Southeast Vipassana Association was founded and a Center Search committee was subsequently formed to locate land suitable for a meditation center. Initially the search began in northern and central Florida but was later expanded into Georgia. After considering many sites, the Center property was purchased in December 2005. Phase I construction was begun soon after and was completed in early 2008, with courses beginning in March.

							<br/><br/>The three initial buildings provided accommodations for thirty students. The main building included a meditation hall and residences for fifteen women and fifteen men. The dining hall/kitchen building included an office, an Assistant Teacher room, and server quarters for four women and four men. A temporary building provided space for registration, Metta day display, and other uses as needed.

							<br/><br/>In the summer of 2009, two long-term server cabins were completed. Each cabin houses up to four servers, with one for women and one for men. A beautification and landscaping project was completed in the winter of 2010, adding a number of trees and flowering plants around the buildings.

							<br/><br/>An expansion project -- Phase II -- began in August 2010. Completed in 2011, this expansion brought the Center capacity to about 54 students with the addition of new accommodations, two Assistant Teacher residences, dining annexes and a new meditation hall.  With the present limited capacity, when courses are full we are unable to offer any private rooms.  

							<br/><br/>The next goal is to build a 4 bedroom residence that will accommodate eight more students. It will include one handicap accessible room.  Each bedroom will have its own bathroom and three will have meditation cells.  Situated on the border of the male and female sections, the dormitory will act as flex-housing and will serve either gender depending upon the needs of any given course.

							<br/><br/>Ultimately, the Southeast Vipassana Center will comprise a cluster of buildings constructed around a pagoda with meditation cells for up to 120 old students. The main meditation hall will be at one end, with the dining hall/kitchen building at the other. Various groupings of residences will arc between these two poles. Covered and screened walkways will connect most of the buildings offering protection from weather and insects.

							<br/><br/>The goal is to eventually have individual rooms with individual bath facilities for students, as well as housing for course managers and servers. The entire cluster will be tucked away in a forested area on the highest elevation on the property.
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

export default HistoryOfSEVC;