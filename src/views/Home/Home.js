import React, {Component} from 'react';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
import HomeText from './Home-Text';
import HomeImg from './Home-Img';

const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#fff",
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto"
  }
}
	
class Home extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cell}
						align="left"
						verticalAlign="top"
						width="1/2"
						smallWidth="1"
					>
						<HomeText />
					</Cell>
					<Cell
						style={styles.cell}
						align="right"
						verticalAlign="bottom"
						width="1/2"
						smallWidth="1"
					>
						<HomeImg />
					</Cell>
				</Grid>
			</StyleRoot>
    );
  }
}

export default Home;