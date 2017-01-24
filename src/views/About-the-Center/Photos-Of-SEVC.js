import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import PageSectionHeader from '../../components/Page-Section-Header';
import PageSection from '../../components/Page-Section';
import HomeButton from '../../components/Home-Button';

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#045fb4",
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto"
  }
}

class PhotosOfSEVC extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<PageSectionHeader title={'Photos of the Center'} />
					<PageSection>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum expedita minima, iste, exercitationem soluta magnam pariatur. Voluptatum tempora rerum, perspiciatis veritatis repudiandae amet autem alias fuga esse, labore magni impedit.
						</p>
					</PageSection>
					<HomeButton />
				</Grid>
			</StyleRoot>
    );
  }
}

export default PhotosOfSEVC;