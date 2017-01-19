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
		textAlign: 'center',
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		backgroundColor: "#ffffbe"
  },
	link: {
		margin: "0 auto",
		cursor: "pointer"
	},
	img: {
		margin: "0 auto"
	}
}

class AboutVipassana extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1/2"
						smallWidth="1"
					>
						<Link to='what-is-vipassana' style={styles.link}>What is Vipassana?</Link>
					</Cell>
					<Cell
						style={styles.cell}
						verticalAlign="bottom"
						width="1/2"
						smallWidth="1"
					>
						<Link style={styles.link}>Art of Living</Link>
					</Cell>
					<Cell
						style={styles.cell}
						verticalAlign="bottom"
						width="1/2"
						smallWidth="1"
					>
						<Link style={styles.link}>Vipassana Video</Link>
					</Cell>
					<Cell
						style={styles.cell}
						verticalAlign="bottom"
						width="1/2"
						smallWidth="1"
					>
						<Link style={styles.link}>About S.N. Goenka</Link>
					</Cell>
					<Cell
						style={styles.cell}
						verticalAlign="bottom"
						width="1/2"
						smallWidth="1"
					>
						<Link style={styles.link}>FAQs</Link>
					</Cell>
					<Cell
						style={styles.cell}
						verticalAlign="bottom"
						width="1/2"
						smallWidth="1"
					>
						<Link style={styles.link}>International Website</Link>
					</Cell>
					<Cell
						style={styles.cell}
						verticalAlign="bottom"
						bottom="0"
						width="1"
					>
						<Link to='/' style={styles.link}>Home</Link>
					</Cell>
				</Grid>
			</StyleRoot>
    );
  }
}

export default AboutVipassana;