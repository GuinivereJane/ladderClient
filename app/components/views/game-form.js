import React from 'react';

export class GameForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.render = this.render.bind(this);
  // }

  render() {
    return ( 
      <form onSubmit={this.props.saveGame}  method="POST">
        
        <div className="input-component">
          <label htmlFor="points">Points</label>
          <input type="text" name="points"/>
        </div>
      
        <div className="input-component">
          <label htmlFor="winner">Winner:</label>
          <input type="text" name="winner"/>
        </div>

        <div className="input-component">
          <label htmlFor="winnerFaction">Winning Faction:</label>
          <input type="text" name="winnerFaction"/>
        </div>

        <div className="input-component">
          <label htmlFor="loser">Loser:</label>
          <input type="text" name="loser"/>
        </div>
        <div className="input-component">
          <label htmlFor="loserFaction">Losing Faction:</label>
          <input type="text" name="loserFaction"/>
        </div>

        <input type="submit" value="Submit" />
      </form>
     
    );
  }
};

export default GameForm;
