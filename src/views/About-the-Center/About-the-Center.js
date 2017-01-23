import React, {Component} from 'react';
import SubMenu from '../../components/Sub-Menu/Sub-Menu';

const items = [
	{
		link: 'history-of-sevc',
		text: 'History of the Southeast Vipassana Center'
	},
	{
		link: 'photos-of-the-center',
		text: 'Photographs of the Center'
	}
]

class AboutTheCenter extends Component {
  render() {
    return (
			<SubMenu items={items} />
    );
  }
}

export default AboutTheCenter;