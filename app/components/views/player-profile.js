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
  	
  	let gameTable = this.props.games.map((game)=>{
  		let result = null;
  		let playerFaction = null;
  		let opponentFaction = null;
  		let opponentId = null;
  		
  		console.log(game.winnerId + "winner" + game.loserId + "loser" + this.props.playerId +"playerId");
  		console.log(game.winnerId == this.props.playerId)
  		game.winnerId == this.props.playerId ? ( result = "won",
											  											  playerFaction = game.winnerFaction,
											  											  opponentFaction = game.loserFaction,
																								  opponentId = game.loserId) : 
											  											( result = "lost",
											  											  playerFaction = game.loserFaction,
											  											  opponentFaction = game.winnerFaction,
																								  opponentId = game.winnerId);

  		return (	<div className="game-row">
	  							<div className="game-col date">{game.createdAt}</div>
	  							<div className="game-col result">{result}</div>
	  							<div className="game-col points">{game.points}</div>
	  							<div className="game-col playerFaction">{playerFaction}</div>
	  							<div className="game-col oponentFaction">{opponentFaction}</div>
	  							<div className="game-col opponent">{opponentId}</div>
  							</div>
  						);

  	});
  	

    return (<div className="player-profile">
	    				{profile}
	    			<div>Games History</div>
	    			{gameTable}

	    				<Link to={'/players'}>Back to list</Link>
    				</div>
    				);
  }
};

export default PlayerProfile;