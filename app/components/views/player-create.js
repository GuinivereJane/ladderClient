import React from 'react';
import { Link } from 'react-router';

export class PlayerCreate extends React.Component {
	render() { 
  	return(
  		<div>
  			<Link to="/players/new">Create a new Player Profile</Link>			
      </div>
  	);
  }

};
export default PlayerCreate;
