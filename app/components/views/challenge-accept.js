 
import {Errors} from './view-helpers/error-message';

import React from 'react';
import { Link } from 'react-router';

export class ChallengeAccept extends React.Component {
	

	render() { 
		let errors = <div/>;
		    if (this.props.errors){
		      let errorHelper = new Errors(this.props.errors);
		      errors = errorHelper.errorMessage();
		    }

  	return(
  		<div>
  			{errors}
  			{this.props.players.length > 0 ? <div>The challenge between {this.props.players[0].firstname} {this.props.players[0].lastname} and 
  			 {this.props.players[1].firstname} {this.props.players[1].lastname} has been accepted.  Use the email
  			 address provided in the challenge to contact your opponent and make arrangements to play this game</div>
  			 : <div/>}
      </div>
  	);
  }

};
export default ChallengeAccept;







