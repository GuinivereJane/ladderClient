import React from 'react';
import { Link } from 'react-router';

// .bind(null,this.props.profile.id,shop.id)
export class PlayerProfile extends React.Component {
  render() {
  	let joinButtons = this.props.shops.map((shop)=>{
  		return (<div className="button" onClick={this.props.joinStore} id={shop.id} key={shop.id}>{shop.name}</div>);;
  	});

  	let shop = (<li>Store: Click to Join ({joinButtons})</li>);

  	if (this.props.profile.shop){
  		shop=(<li>Store
  						<ul>
								<li>Name: {this.props.profile.shop.name}</li>
								<li>Address: {this.props.profile.shop.address}</li>
								<li>Email: {this.props.profile.shop.email}</li>
								<li>Phone: {this.props.profile.shop.phonenumnber}</li>
							</ul>
							<div className="button" onClick={this.props.leaveStore} 
																			id={this.props.profile.shop.id}>
								Remove Store
							</div>

						</li>)
  	}

    return (<div className="player-profile">
	    				<ul>
	    					<li>Name: {this.props.profile.firstname} {this.props.profile.lastname}</li>
	    					<li>Email: {this.props.profile.email}</li>
	    					<li>Phone: {this.props.profile.phonenumber}</li>
	    					{shop}
	    				</ul>
	    				<Link to={'/players'}>Back to list</Link>
    				</div>
    				);
  }
};

export default PlayerProfile;