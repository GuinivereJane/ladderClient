import React from 'react';
import {Errors} from './view-helpers/error-message';

export class GameForm extends React.Component {


  render() {
    let loserList = (<datalist id="loserOptions">{this.props.loserOptions}</datalist>);
    let factionList = (<datalist id="factionOptions">{this.props.factionOptions}</datalist>);

    let errors = <div/>;
    if (this.props.errors){
      let errorHelper = new Errors(this.props.errors);
      errors = errorHelper.errorMessage();
    }

    return ( 
      <div className='post-form'>
      {errors}
        <form onSubmit={this.props.saveGame}  method="POST">
          <div className="input-component">
            <label htmlFor="points">Points</label>
            <input type="text" name="points"/>
          </div>
        
          <div className="input-component">
            <label htmlFor="winner">Winner:</label>
            <input type="text" name="winner"/>
          </div>
          {factionList}
          <div className="input-component">
            <label htmlFor="winnerFaction">Winning Faction:</label>
            <input type="text" 
                   name="winnerFaction"
                   list="factionOptions"
                   autoComplete="off"/>
          </div>
          {loserList}
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
};

export default GameForm;
