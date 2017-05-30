import React from 'react';
import { Link } from 'react-router';
import PlayerCreate from './player-create';


export class PlayerList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.render = this.render.bind(this);
  // }
  list(){
    let list=<div/>;
    if(this.props.players){
     list = this.props.players.map((player)=>{
      if(this.props.playerId > 0){
        if (this.props.playerId === player.id){
          return (
            <li key={player.id}>
              <Link to={'/players/' + player.id}>{player.firstname}</Link>
              <div onClick = {this.props.deletePlayer.bind(null, player.id)} className = "button">Delete</div>
            </li>
          );
        }else{
          return (
            <li key={player.id}>
              <Link to={'/players/' + player.id}>{player.firstname} {player.lastname}</Link>
              <div className ="button" onClick ={this.props.challengeClick.bind(null,this.props.playerId,player.id)}>Challange</div>
            </li>
          ); 
        } 
      }else{
        return (
            <li key={player.id}>
              {player.firstname} {player.lastname}
              </li>);
      } 
    });
    }
    return list;
  }


  render() {

    return (
      <div>
      <ul className = "player-list">
       {this.list()}
      </ul>
      {this.props.playerId  < 0? <PlayerCreate/> : <div/>}
      </div>
    );
  }
};

export default PlayerList;
