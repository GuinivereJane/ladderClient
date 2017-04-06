import React from 'react';
import { Link } from 'react-router';

// .bind(null,this.props.profile.id,shop.id)
export class ShopProfile extends React.Component {
  render() {
  	
  	let players = <li>There are no players registered yet for this store</li>	
  		if (typeof this.props.shopProfile.players !== 'undefined'){
  		let playerList = this.props.shopProfile.players.map((player)=>{
  		return(<ul>
  						<li>Name: {player.firstname} {player.lastname}</li>
	    				<li>Email: {player.email}</li>
	    				<li>Phone: {player.phonenumber}</li>
	    			 </ul>
  			);
  		});
  		players = <li>Players Regeistered for this store
  								{playerList}
  							</li>
  	}



  	
    return (<div className="shop-profile">
	    				<ul>
	    					<li>Name: {this.props.shopProfile.name}</li>
	    					<li>Email: {this.props.shopProfile.email}</li>
	    					<li>Phone: {this.props.shopProfile.phonenumber}</li>
	    					<li>Address: {this.props.shopProfile.address}</li>
	    					{players}
	    				</ul>
	    				<Link to={'/shops'}>Back to list</Link>
    				</div>
    				);
  }
};

export default ShopProfile;