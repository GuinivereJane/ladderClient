import React from 'react';
import { Link } from 'react-router';

// .bind(null,this.props.profile.id,shop.id)
export class PlayerProfile extends React.Component {
  render() {
  	let joinButtons = this.props.shops.map((shop)=>{
  		return (<div className="button" onClick={this.props.joinStore} id={shop.id} key={shop.id}>{shop.name}</div>);;
  	});

  	let profile = <div/>
  	if (this.props.playerId > 0){  //check if we are logged in

  		let shop = (<li>Store: Click to Join ({joinButtons})</li>);
	  	if (this.props.profile.shop  && this.props.playerId == this.props.profile.id){
	  		shop =(<li>
		  						<div className="button" onClick={this.props.leaveStore} 
																					id={this.props.profile.shop.id}>
										Leave {this.props.profile.shop.name}
									</div>
								</li>
								);
	  	}else if (this.props.profile.shop){
	  		shop = (<li>Shop: {this.props.profile.shop.name}</li>)
	  	}

  		profile = (<ul>
	    					<li>Name: {this.props.profile.firstname} {this.props.profile.lastname}</li>
	    					<li>Email: {this.props.profile.email}</li>
	    					<li>Phone: {this.props.profile.phonenumber}</li>
	    					{shop}
	    				</ul>);
  	}
  	console.log(profile)

    return (<div className="player-profile">
	    				{profile}
	    				<Link to={'/players'}>Back to list</Link>
    				</div>
    				);
  }
};

export default PlayerProfile;