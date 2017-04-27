import React from 'react';
import {connect} from 'react-redux';
import ShopProfile from '../views/shop-profile';
//import * as playerApi from '../../api/player-api';
import * as shopApi from '../../api/shop-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';
import store from '../../store';



export class ShopProfileContainer extends React.Component {
componentDidMount(){
		shopApi.getProfile(this.props.params.shopId);
	}


	render(){

		return (
				<ShopProfile shopProfile={this.props.shopProfile} playerId={this.props.playerId}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	shopProfile: store.shopState.shopProfile,
  	  	playerId: store.playerState.playerId

	};
};

export default connect(mapStateToProps)(ShopProfileContainer);