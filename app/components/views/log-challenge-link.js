import React from 'react';
import { Link } from 'react-router';

export class LogChallengeLink extends React.Component {
	render() { 
  	return(
  		<div>
  			<Link to={`/challenge/${this.props.challengeId}/log`}>Log Results of Game Vs {this.props.opponent}</Link>			
      </div>
  	);
  }

};
export default LogChallengeLink;

