import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');

const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import PageSectionHeader from '../../components/Page-Section-Header';
import HomeButton from '../../components/Home-Button';

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#045fb4",
    marginBottom: "0rem",
    padding: " 0 1rem",
    height: "auto"
  },
	h3: {
		margin: "auto"
	}
}

class FAQ extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<PageSectionHeader title={'Questions & Answers About the Technique of Vipassana Meditation'} />
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={styles.h3}>Why is the course ten days long?</h4> <br/>
							Actually, the ten-day course is the minimum; it provides an essential introduction and foundation to the technique. To develop in the practice is a lifetime job. Experience over generations has shown that if Vipassana is taught in periods of less than ten days, the student does not get a sufficient experiential grasp of the technique. Traditionally, Vipassana was taught in retreats lasting seven weeks. With the dawning of the 20th century, the teachers of this tradition began to experiment with shorter times to suit the quickening pace of life. They tried thirty days, two weeks, ten days, down to seven days--and they found that less than ten days is not enough time for the mind to settle down and work deeply with the mind-body phenomenon.
						</p>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={styles.h3}>How many hours a day will I be meditating?</h4> <br/>
							The day begins at 4:00 a.m. with a wakeup bell and continues until 9:00 p.m. There are about ten hours of meditation throughout the day, interspersed with regular breaks and rest periods. Every evening at 7:00 p.m. there is a videotaped lecture by the Teacher, S.N. Goenka, which provides a context for meditators to understand their experience of the day. This schedule has proved workable and beneficial for hundreds of thousands of people for decades.
						</p>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={styles.h3}>What language is used in the course?</h4> <br/>
							The teaching is given through recordings of S.N. Goenka, speaking in English or Hindi, together with a translation into a local language. Tape translations exist in most of the major languages of the world, including English.

							<br/><br/>If the teachers conducting a course do not speak the local language fluently, interpreters will be there to help.

							<br/><br/>Language is usually no barrier for someone who wants to join a course.
						</p>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={styles.h3}>How much does the course cost?</h4> <br/>
							Each student who attends a Vipassana course is given this gift by a previous student. There is no charge for either the teaching, or for room and board. All Vipassana courses worldwide are run on a strictly voluntary donation basis. At the end of your course, if you have benefited from the experience, you are welcome to donate for the coming course, according to your volition and your means.
						</p>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={styles.h3}>How much are the teachers paid to conduct the course?</h4> <br/>
							Teachers receive no payment, donations or other material benefit. They are required to have their own private means of support. This rule means that some of them may have less time for teaching, but it protects students from exploitation and it guards against commercialism. In this tradition, teachers give Vipassana purely as a service to others. All they get is the satisfaction of seeing people's happiness at the end of ten days.
						</p>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={styles.h3}>I can't sit cross-legged. Can I meditate?</h4> <br/>
							Certainly. Chairs are provided for those unable to sit comfortably on the floor because of age or a physical problem.
						</p>
					</Cell>
					<HomeButton />
				</Grid>
			</StyleRoot>
    );
  }
}

export default FAQ;