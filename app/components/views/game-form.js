import React from 'react';
import {Errors} from './view-helpers/error-message';

export class GameForm extends React.Component {


  render() {
    let playerList = (<datalist id="loserOptions">{this.props.loserOptions}</datalist>);
    let factionList = (<datalist id="factionOptions">{this.props.factionOptions}</datalist>);

    let errors = <div/>;
    if (this.props.errors){
      let errorHelper = new Errors(this.props.errors);
      errors = errorHelper.errorMessage();
    }
    let winnerInput = 
          <div className="input-component">
            <label htmlFor="winner">Winner:</label>
            <input onChange={this.props.change.bind(this)} 
                   autoComplete="off"
                   list="loserOptions"
                   type="text"
                   name="winner"/>
          </div>;
   //check to see if the challenge has allready been logged
    

    let allreadyLogged = false;
    if (this.props.challengeId){
      allreadyLogged = this.props.challenge.complete;
    } 

    //check to see if the challenge has been accepted
    let accepted = false;
    if (this.props.challengeId){
      accepted = this.props.challenge.accepted;
    } console.log(accepted)

    

    //only produce the form if this challenge has been accepted and has not yet been logged

      let form = (
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
              </form>);

          form  = accepted ? form :<div>This challenge has not yet been accepted</div>
          form = allreadyLogged ? <div>This Challenge has allready been logged</div> : form;
    
    return ( 
      <div className='post-form'>
        {errors}
        {this.props.title}
        {form}
      </div>
     
    );
  }
};

export default GameForm;
