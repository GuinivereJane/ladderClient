import React from 'react';
import {connect} from 'react-redux';
import ChallengeAccept from '../views/challenge-accept';
import * as gameApi from '../../api/game-api';
import store from '../../store';
import {searchUpdate} from '../../actions/search-layout-actions';
import * as playerApi from '../../api/player-api';

import * as challengeApi from '../../api/challenge-api';
import * as errorApi from '../../api/error-api';

//store is the redux store shop is the data object.  
export class ChallengeAcceptContainer extends React.Component {

	

	




	componentDidMount(){
			challengeApi.acceptChallenge(this.props.params.challengeId);

			challengeApi.getChallenge(this.props.params.challengeId)
			.then(()=>{
				playerApi.getPlayers()
          .then(()=>{
          	  let players =[];
			        this.props.players.forEach((player)=>{
			        	if(this.props.challenge.challengerId == player.id){
			        		players.push(player);
			        	}
			        	if(this.props.challenge.challengedId == player.id){
			        		players.push(player);
			        	}

			        });
			        console.log(players);
			        store.dispatch(searchUpdate(players))});


				});
			
     
	}
		

	render(){

		return (
			
		<ChallengeAccept  players={this.props.searchResults}
                      errors={this.props.errors}
                      />
			
		);
	}
}

const mapStateToProps = function(store) {
	return {
		    playerId: store.playerState.playerId,
		      	players: store.playerState.players,
  	 searchResults :store.searchState.searchResults,
  	errors:store.errorState.errors,
    
    challenge: store.challengeState.challenge


	};
};

export default connect(mapStateToProps)(ChallengeAcceptContainer);