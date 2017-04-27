import React from 'react';
import { Link } from 'react-router';
import PlayerList from './player-list';
import * as playerApi from '../../api/player-api';


// .bind(null,this.props.profile.id,shop.id)
export class ShopProfile extends React.Component {
  render() {
  	
  	let players = <li>There are no players registered yet for this store</li>	
  	if (typeof this.props.shopProfile.players !== 'undefined' &&
  		      this.props.shopProfile.players.length >0){

  		let playerList = this.props.shopProfile.players.map((player)=>{
  		return(<li key={player.email}>
  						<div>Name: {player.firstname} {player.lastname}</div>
	    				<div>Email: {player.email}</div>
	    				<div>Phone: {player.phonenumber}</div>
	    			 </li>
  			);
  		});
  		players = <li>Players Regeistered for this store
  								<ol>
  								{playerList}
  								</ol>
  							</li>
  	}
  	
    return (<div className="shop-profile">
	    				<ul>
	    					<li>Name: {this.props.shopProfile.name}</li>
	    					<li>Email: {this.props.shopProfile.email}</li>
	    					<li>Phone: {this.props.shopProfile.phonenumber}</li>
	    					<li>Address: {this.props.shopProfile.address}</li>
                <li>Players:
                <PlayerList players={this.props.shopProfile.players}
                  deletePlayer={playerApi.deletePlayer}
                  playerId={this.props.playerId}/>	
                </li>
              </ul>
	    				<Link to={'/shops'}>Back to list</Link>
    				</div>
    				);
  }
};

export default ShopProfile;