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
		backgroundColor: "#ffffbe"
  },
	h3: {
		margin: "auto"
	}
}

class CodeOfDiscipline extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Introduction to the Technique</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							Vipassana is one of India's most ancient meditation techniques. Long lost to humanity, it was rediscovered by Gotama the Buddha more than 2500 years ago. The word Vipassana means seeing things as they really are. It is the process of self- purification by self-observation. One begins by observing the natural breath to concentrate the mind. With a sharpened awareness one proceeds to observe the changing nature of body and mind and experiences the universal truths of impermanence, suffering and egolessness. This truth-realization by direct experience is the process of purification. The entire path (Dhamma) is a universal remedy for universal problems and has nothing to do with any organized religion or sectarianism. For this reason, it can be freely practiced by everyone, at any time, in any place, without conflict due to race, community or religion, and will prove equally beneficial to one and all.

							<br/><br/><b>What Vipassana is not:</b>

							<br/>It is not a rite or ritual based on blind faith.
							<br/>It is neither an intellectual nor a philosophical entertainment.
							<br/>It is not a rest cure, a holiday, or an opportunity for socializing.
							<br/>It is not an escape from the trials and tribulations of everyday life.
							
							<br/><br/><b>What Vipassana is:</b>

							<br/>It is a technique that will eradicate suffering.
							<br/>It is a method of mental purification which allows one to face life's tensions and problems in a calm, balanced way.
							<br/>It is an art of living that one can use to make positive contributions to society.
							
							<br/><br/>Vipassana meditation aims at the highest spiritual goals of total liberation and full enlightenment. Its purpose is never simply to cure physical disease. However, as a by-product of mental purification, many psychosomatic diseases are eradicated. In fact, Vipassana eliminates the three causes of all unhappiness: craving, aversion and ignorance. With continued practice, the meditation releases the tensions developed in everyday life, opening the knots tied by the old habit of reacting in an unbalanced way to pleasant and unpleasant situations.

							<br/><br/>Although Vipassana was developed as a technique by the Buddha, its practice is not limited to Buddhists. There is absolutely no question of conversion. The technique works on the simple basis that all human beings share the same problems and a technique which can eradicate these problems will have a universal application. People from many religious denominations have experienced the benefits of Vipassana meditation, and have found no conflict with their profession of faith.
							
						</p>
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Meditation and Self-Discipline</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							The process of self-purification by introspection is certainly never easy--students have to work very hard at it. By their own efforts students arrive at their own realizations; no one else can do this for them. Therefore, the meditation will suit only those willing to work seriously and observe the discipline, which is there for the benefit and protection of the meditators and is an integral part of the meditation practice.

							<br/><br/>Ten days is certainly a very short time in which to penetrate the deepest levels of the unconscious mind and learn how to eradicate the complexes lying there. Continuity of the practice in seclusion is the secret of this technique's success. Rules and regulations have been developed keeping this practical aspect in mind. They are not primarily for the benefit of the teacher or the course management, nor are they negative expressions of tradition, orthodoxy or blind faith in some organized religion. Rather, they are based on the practical experience of thousands of meditators over the years and are both scientific and rational. Abiding by the rules creates a very conducive atmosphere for meditation; breaking them pollutes it.

							<br/><br/><b>A student will have to stay for the entire period of the course. The other rules should also be carefully read and considered. Only those who feel that they can honestly and scrupulously follow the discipline should apply for admission.</b> Those not prepared to make a determined effort will waste their time and, moreover, will disturb others who wish to work seriously. A prospective student should also understand that it would be both disadvantageous and inadvisable to leave without finishing the course upon finding the discipline too difficult. Likewise, it would be most unfortunate if, in spite of repeated reminders, a student does not follow the rules and has to be asked to leave.
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

export default CodeOfDiscipline;