import React from 'react';
import {connect} from 'react-redux';
import PlayerList from '../views/player-list';
import * as playerApi from '../../api/player-api';

import { searchUpdate } from '../../actions/search-layout-actions';
import store from '../../store';


export class PlayerListContainer extends React.Component {



	
	componentDidMount(){
		playerApi.getPlayers()
			//the initial search results are all the players, send them into the store
			.then(()=>{store.dispatch(searchUpdate(this.props.players))});
	}
	
	
	render(){		  


		return (
			<PlayerList challengeClick = {playerApi.challengePlayer}
									playerId={this.props.playerId}
									players={this.props.searchResults}
									deletePlayer={playerApi.deletePlayer}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	players: store.playerState.players,
  	playerId: store.playerState.playerId,
  	searchResults :store.searchState.searchResults

	};
};

export default connect(mapStateToProps)(PlayerListContainer);
