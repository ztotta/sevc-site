import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import LinkOrAnchor from './Link-Or-Anchor';

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		backgroundColor: "#ffffbe",
		borderRadius: '5px'
  },
	link: {
		margin: "0 auto",
		cursor: "pointer"
	}
}

class SubMenu extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					{this.props.items.map(el => {
						return(
							<Cell 
								key={el.text}
								style={styles.cell}
								verticalAlign="top"
								width="1/2"
								smallWidth="1"
							>
								<LinkOrAnchor el={el} />
							</Cell>
						)
					})}
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

export default SubMenu;