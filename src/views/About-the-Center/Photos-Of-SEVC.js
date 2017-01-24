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

class PhotosOfSEVC extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Photos of the Center</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum expedita minima, iste, exercitationem soluta magnam pariatur. Voluptatum tempora rerum, perspiciatis veritatis repudiandae amet autem alias fuga esse, labore magni impedit.
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

export default PhotosOfSEVC;