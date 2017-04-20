import * as errorApi from '../../api/error-api';
import LoginForm from '../views/login-form';
import React from 'react';
import {connect} from 'react-redux';
import * as loginApi from '../../api/login-api';

export class LoginContainer extends React.Component {

	onLogin(e){
		 e.preventDefault();

		loginApi.login(e.target.email.value,e.target.password.value);
	}

	onSecret(e){
		e.preventDefault();

		loginApi.secret();
	}

	onLogout(e){
		e.preventDefault();

		loginApi.logout();
	}
	
	render(){
    let errors = errorApi.errorMessage(this.props.errors);


		return(
			<LoginForm errors={errors}
								 onLogin={this.onLogin}
								 onSecret={this.onSecret}
								 onLogout={this.onLogout}
			/>
			);
	}

}

const mapStateToProps = function(store) {
	return {
  	errors:store.errorState.errors,
	};
};

export default connect(mapStateToProps)(LoginContainer);

