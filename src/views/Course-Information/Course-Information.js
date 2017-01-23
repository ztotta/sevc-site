import React, {Component} from 'react';
import SubMenu from '../../components/Sub-Menu/Sub-Menu';

const items = [
	{
		anchor: 'https://www.dhamma.org/en-US/schedules/schpatapa',
		text: 'Schedule & Apply'
	},
	{
		link: 'code-of-discipline',
		text: 'Code of Discipline'
	},
	{
		anchor: 'course-checklist',
		text: 'Course Checklist'
	},
	{
		anchor: 'http://www.children.dhamma.org/en/children/',
		text: "Children's Course"
	},
	{
		anchor: 'http://www.children.dhamma.org/en/teens/',
		text: "Teenager's Course"
	},
	{
		anchor: 'directions',
		text: 'Directions to Dhamma Patapa'
	}
]

class CourseInformation extends Component {
  render() {
    return (
			<SubMenu items={items} />
    );
  }
}

export default CourseInformation;