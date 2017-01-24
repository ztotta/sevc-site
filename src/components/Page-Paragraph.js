import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import LinkOrAnchor from './Sub-Menu/Link-Or-Anchor';

const styles = {
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		backgroundColor: "#ffffbe",
		borderRadius: '5px',
		width: '100%'
  },
	h3: {
		margin: "auto"
	}
}

class PageSectionHeader extends Component {
  render() {
    return (
				<Cell 
					style={styles.cellHeader}
					verticalAlign="top"
					width="1"
				>
					<h3 style={styles.h3}>{this.props.title}</h3>
				</Cell>
    );
  }
}

export default PageSectionHeader;