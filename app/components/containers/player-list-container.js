import React from 'react';
import {connect} from 'react-redux';
import PlayerList from '../views/player-list';
import * as playerApi from '../../api/player-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import store from '../../store';


export class PlayerListContainer extends React.Component {



	
	componentDidMount(){
		playerApi.getPlayers();
		store.dispatch(loadSearchLayout('players', 'Player Results'));
	}
	
	
	render(){

		return (
			<PlayerList players={this.props.players} deletePlayer={playerApi.deletePlayer}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	players: store.playerState.players
	};
};

export default connect(mapStateToProps)(PlayerListContainer);
