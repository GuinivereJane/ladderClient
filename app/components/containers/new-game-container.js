import React from 'react';
import {connect} from 'react-redux';
import GameForm from '../views/game-form';
import * as gameApi from '../../api/game-api';
import store from '../../store';
import {searchUpdate} from '../../actions/search-layout-actions';
import * as playerApi from '../../api/player-api';
import * as allianceApi from '../../api/alliance-api';
import * as factionApi from '../../api/faction-api';



export class NewGameContainer extends React.Component {


    componentDidMount(){
        playerApi.getPlayers()
            //the initial search results are all the players, send them into the store
            .then(()=>{store.dispatch(searchUpdate(this.props.players))});
        allianceApi.getAlliances();
        factionApi.getFactions();
    }
    
    handleLoserChange(e){
        e.preventDefault();

        //in this line filter this.props.players for search values
        let search = this.props.players.filter((value)=>{
            let searchString=e.target.value;
            let fullname = `${value.firstname} ${value.lastname}`
            return fullname.substring(0,searchString.length).toUpperCase() == searchString.toUpperCase();
        });
        store.dispatch(searchUpdate(search));
    }

	handleSubmit(e){
		e.preventDefault();
    let points = e.target.points.value;
    let winnerId = e.target.winner.value;
    let winnerFaction = e.target.winnerFaction.value;
    let loserFaction = e.target.loserFaction.value;
    let loserId = e.target.loser.value;

    let data={points:points,
    			winnerId:winnerId,
    			winnerFaction:winnerFaction,
    			loserId:loserId,
    			loserFaction:loserFaction
    		}
    	
		let call = gameApi.saveGame(data);



	}

	render(){
        let loserOptions = this.props.searchResults.map((option)=>{
            return ( <option key={option.id} value={`${option.firstname} ${option.lastname}`}/>);
        });

        let factionOptions = "not ready";
        if(this.props.factions){
            factionOptions = this.props.factions.map((option)=>{
                return ( <option key={option.id} value={option.name}/>);
            });
        }

		return (
			<GameForm loserOptions={loserOptions}
                      players={this.props.players}
                      errors={this.props.errors}
                      saveGame={this.handleSubmit}
                      change={this.handleLoserChange}
                      factionOptions={factionOptions}
                      />
		);
	}
}

const mapStateToProps = function(store) {
	return {
  	players: store.playerState.players,
    searchResults :store.searchState.searchResults,
  	errors:store.errorState.errors,
    alliances: store.allianceState.alliances,
    factions: store.factionState.factions
	};
};

export default connect(mapStateToProps)(NewGameContainer);
