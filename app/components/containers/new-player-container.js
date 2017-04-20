import React from 'react';
import {connect} from 'react-redux';
import PlayerForm from '../views/player-form';
import * as playerApi from '../../api/player-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import store from '../../store';


export class NewPlayerContainer extends React.Component {
	constructor(){
		super()
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();

    let firstName = e.target.firstname.value;
    let lastName = e.target.lastname.value;
    let emailAddr = e.target.email.value;
    let password = e.target.password.value;

    let data={firstname:firstName,
    			lastname:lastName,
    			email:emailAddr,
    			password:password
    		}
    const from = this.props.location.pathname
		playerApi.savePlayer(data)
		//.done only fires if the API returns with no error.  If there is an error the 
		//errorState is updated and the results appear on the page.
			.done(()=>{window.location = "http://localhost:3000/players"})


	
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
