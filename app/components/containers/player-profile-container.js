import React from 'react';
import {connect} from 'react-redux';
import PlayerProfile from '../views/player-profile';
import * as playerApi from '../../api/player-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import store from '../../store';



export class PlayerProfileContainer extends React.Component {

	
	componentDidMount(){
		playerApi.getProfile(this.props.params.playerId);
	}

	render(){
		        console.log(this.props);

		return (
				<PlayerProfile profile={this.props.playerProfile}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	playerProfile: store.playerState.playerProfile
	};
};

export default connect(mapStateToProps)(PlayerProfileContainer);