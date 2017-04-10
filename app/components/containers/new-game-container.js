import React from 'react';
import {connect} from 'react-redux';
import GameForm from '../views/game-form';
import * as gameApi from '../../api/game-api';
import store from '../../store';


export class NewGameContainer extends React.Component {


	handleSubmit(e){
		e.preventDefault();
    let points = e.target.points.value;
    let winnerId = e.target.winner.value;
    let winnerFaction = e.target.winnerFaction.value;
    let loserFaction = e.target.loserFaction.value;
    let loserId = e.target.loser.value;

    let data={points:points,
    			winnerId:winnerId,
    			winnerFaction:winnerFaction,
    			loserId:loserId,
    			loserFaction:loserFaction
    		}
    	
		let call = gameApi.saveGame(data);

		console.log(call);

		//window.location = "http://localhost:3000/games"

	}

	render(){
		return (
			<GameForm players={this.props.players} saveGame={this.handleSubmit}/>
		);
	}
}

const mapStateToProps = function(store) {
	return {
  	players: store.playerState.players
	};
};

export default connect(mapStateToProps)(NewGameContainer);
