import React from 'react';
import {connect} from 'react-redux';
import PlayerChallengeList from '../views/player-challenge-list';
import * as playerApi from '../../api/player-api';
import * as challengeApi from '../../api/challenge-api';

import { searchUpdate } from '../../actions/search-layout-actions';
import store from '../../store';


export class PlayerChallengeContainer extends React.Component {



	
	componentDidMount(){
		playerApi.getPlayers();
			//the initial search results are all the players, send them into the store
		challengeApi.getChallenges();
	}
	
	
	render(){	

		let opponent = null;	
		let challengeList = this.props.challenges.map((challenge)=>{
			if ((challenge.accepted === true) && (challenge.complete === false)){
				//only offer to log challenges that have not previously been logged.
				if ((this.props.params.playerId == challenge.challengerId) || (this.props.params.playerId == challenge.challengedId)){
					//the challenge is one this player participated in
					this.props.params.playerId == challenge.challengerId ? opponent = challenge.challengedId : opponent = challenge.challengerId;
					return ({"id":challenge.id, "opponent":opponent});
				}
			}
		});
		challengeList = challengeList.filter((challenge)=>{return challenge !== undefined})


		return (
				<PlayerChallengeList challenges={challengeList} />
			);
	}
}

const mapStateToProps = function(store) {
	return {
		challenges: store.challengeState.challenges,
  	players: store.playerState.players,
  	playerId: store.playerState.playerId,
  	searchResults :store.searchState.searchResults

	};
};

export default connect(mapStateToProps)(PlayerChallengeContainer);
