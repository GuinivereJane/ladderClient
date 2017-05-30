import React from 'react';
import LogChallengeLink from './log-challenge-link'
export class PlayerChallengeList extends React.Component {
	render() { 
  	
  	let list = this.props.challenges.map((challenge)=>{
  		return <LogChallengeLink challengeId={challenge.id} opponent={challenge.opponent}/>
  	});
  	list = this.props.challenges.length === 0 ? <div>You have no active challenges</div> : list;

  	return(
  		<div>
  			{list}
  	
  		</div>

  	);
  }

};
export default PlayerChallengeList;
