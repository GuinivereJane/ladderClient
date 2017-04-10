import React from 'react';
import {connect} from 'react-redux';
import PlayerForm from '../views/player-form';
import * as playerApi from '../../api/player-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import store from '../../store';


export class NewPlayerContainer extends React.Component {


	handleSubmit(e){
		e.preventDefault();

    let firstName = e.target.firstname.value;
    let lastName = e.target.lastname.value;
    let emailAddr = e.target.email.value;

    let data={firstname:firstName,
    			lastname:lastName,
    			email:emailAddr
    		}
    	
		playerApi.savePlayer(data);


		
	}

	render(){
		return (
			<PlayerForm players={this.props.players} errors={this.props.errors} savePlayer={this.handleSubmit}/>
		);
	}
}

const mapStateToProps = function(store) {
	return {
  	players: store.playerState.players,
  	errors: store.errorState.errors
	};
};

export default connect(mapStateToProps)(NewPlayerContainer);
