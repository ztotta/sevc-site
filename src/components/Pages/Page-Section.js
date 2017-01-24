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
  }
}

class PageSection extends Component {
  render() {
    return (
			<Cell 
				style={styles.cell}
				verticalAlign="top"
				width="1"
			>
				{this.props.children}
			</Cell>
    );
  }
}

export default PageSection;