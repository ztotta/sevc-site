import React, {Component} from 'react';
import SubMenu from '../../components/Sub-Menu/Sub-Menu';

const items = [
	{
		link: 'what-is-vipassana',
		text: 'What is Vipassana?'
	},
	{
		link: 'art-of-living',
		text: 'Art of Living'
	},
	{
		anchor: 'http://video.server.dhamma.org/video/intro/vintro.htm',
		text: 'Vipassana Video'
	},
	{
		link: 'about-sn-goenka',
		text: 'About S.N. Goenka'
	},
	{
		link: 'FAQ',
		text: 'FAQ'
	},
	{
		anchor: 'https://www.dhamma.org',
		text: 'International Website'
	}
]

class AboutVipassana extends Component {
  render() {
    return (
			<SubMenu items={items} />
    );
  }
}

export default AboutVipassana;