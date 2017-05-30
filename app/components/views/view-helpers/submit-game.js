				


import React from 'react';

export class SubmitGame extends React.Component {
			
			render(){
				let playerList = (<datalist id="loserOptions">{this.props.loserOptions}</datalist>);
    		let factionList = (<datalist id="factionOptions">{this.props.factionOptions}</datalist>);

    		let winnerInput = 
          <div className="input-component">
            <label htmlFor="winner">Winner:</label>
            <input onChange={this.props.change.bind(this)} 
                   autoComplete="off"
                   list="loserOptions"
                   type="text"
                   name="winner"/>
          </div>;

				return (
					<div>
					<form onSubmit={this.props.saveGame}  method="POST">
	          {this.props.challengeId ? <input type="hidden" name="challengeId" value={this.props.challengeId}/> : <div/>}

	          <div className="input-component">
	            <label htmlFor="points">Points</label>
	            <input type="text" name="points"/>
	          </div>
	          {playerList}

	          {this.props.challengeId ? winnerInput : <div/>}
	         
	          {factionList}
	          <div className="input-component">
	            <label htmlFor="winnerFaction">Winning Faction:</label>
	            <input type="text" 
	                   name="winnerFaction"
	                   list="factionOptions"
	                   autoComplete="off"/>
	          </div>
	          <div className="input-component">
	            <label htmlFor="loser">Loser:</label>
	            <input onChange={this.props.change.bind(this)} 
	                   autoComplete="off"
	                   list="loserOptions"
	                   type="text"
	                   name="loser"/>
	          </div>
	          <div className="input-component">
	            <label htmlFor="loserFaction">Losing Faction:</label>
	            <input type="text" 
	                   name="loserFaction"
	                   list="factionOptions"
	                   autoComplete="off"/>          </div>

	          <input type="submit" value="Submit" />
	        </form>
	        </div>
	       );
      }
 }
 export default SubmitGame;


 import React from 'react';
import {Errors} from './view-helpers/error-message';
import SubmitGame from './view-helpers/submit-game';
export class GameForm extends React.Component {


  render() {
    

    let errors = <div/>;
    if (this.props.errors){
      let errorHelper = new Errors(this.props.errors);
      errors = errorHelper.errorMessage();
    }
    
   //check to see if the challenge has allready been logged
    let allreadyLogged = false;
    if (this.props.challengeId){
      allreadyLogged = this.props.challenge.complete;
    } 
    return ( 
      <div className='post-form'>
      {errors}
      {this.props.title}
      
      <SubmitGame challengeId ={this.props.challengeId}
                  factionOptions={this.props.factionOptions}
                  loserOption={this.props.loserOptions}
                  saveGame={this.props.saveGame}
                  change={this.props.change}
                  players={this.props.players}
     />
     

        
      </div>
     
    );
  }
};

export default GameForm;


