import React from 'react';
import { Link } from 'react-router';

export class PlayerList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.render = this.render.bind(this);
  // }

  render() {
    return (
      <div>
      <ul className = "player-list">
       {this.props.players.map((player)=>{
          return (
            <li key={player.id}>
              <Link to={'/players/' + player.id}>{player.firstname}</Link>
              <div onClick = {this.props.deletePlayer.bind(null, player.id)} className = "button">Delete</div>
           </li>
           );
        })}

      </ul>
      <Link to="/players/new">Create a new profile</Link>
      </div>
    );
  }
};

export default PlayerList;
