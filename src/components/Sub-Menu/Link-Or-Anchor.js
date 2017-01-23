import React, {Component} from 'react';
import { Link } from 'react-router';

const styles = {
	link: {
		margin: '0 auto'
	}
}

function Anchor(props) {
  return <a href={props.el.anchor} target='_blank' style={styles.link}>{props.el.text}</a>;
}

function Linkor(props) {
  return <Link to={props.el.link} style={styles.link}>{props.el.text}</Link>;	
}

function WhichTag(props) {
  const isLink = props.el.link;
  if (isLink) {
    return <Linkor el={props.el} />;
  } else {
  	return <Anchor el={props.el} />;
	}
}

class LinkOrAnchor extends Component {
  render() {
		return(
			<WhichTag el={this.props.el} />
		)
  }
}

export default LinkOrAnchor;