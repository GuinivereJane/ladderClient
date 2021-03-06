import React from 'react';
import {connect} from 'react-redux';
import PlayerProfile from '../views/player-profile';
import * as playerApi from '../../api/player-api';
import * as shopApi from '../../api/shop-api';
import * as gameApi from '../../api/game-api';

import store from '../../store';


export class PlayerProfileContainer extends React.Component {

	constructor(){
		super()
		this.joinStore=this.joinStore.bind(this);
		this.leaveStore=this.leaveStore.bind(this);
	}

	joinStore(e){
		e.preventDefault();
		let shopKey = Object.keys(this.props.shops).filter((key)=>{
    	return this.props.shops[key].id == e.target.id;
		});
		playerApi.assocStoreToPlayer(this.props.playerProfile, this.props.shops[shopKey]);

	}

	leaveStore(e){
		e.preventDefault();
		let shopId = e.target.id;
		playerApi.removeStoreFromPlayer(this.props.playerProfile.id, shopId);

	}

	componentDidMount(){
		playerApi.getProfile(this.props.params.playerId);
		playerApi.getPlayers();
		gameApi.getGamesByUserId(this.props.params.playerId);
		shopApi.getShops();
	}
// ()=>playerApi.assocStoreToPlayer(2,1)
	render(){

		return (
				<PlayerProfile profile={this.props.playerProfile}
												 shops={this.props.shops} 
												 playerId={this.props.params.playerId}
												 players={this.props.players}
												joinStore={this.joinStore}
												leaveStore={this.leaveStore}
												games={this.props.games}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	playerProfile: store.playerState.playerProfile,
  	playerId: store.playerState.playerId,
  	players: store.playerState.players,
  	games: store.gameState.games,
  	shops: store.shopState.shops
	};
};

export default connect(mapStateToProps)(PlayerProfileContainer);