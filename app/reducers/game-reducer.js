import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  games: [] 
};

const gameReducer = function(state = initialState, action) {
  switch(action.type) {

    case types.SAVE_GAME_SUCCESS:
    	let newGames = [...state.games, action.game];
    	return {...state, games:newGames};	
    

    case types.GET_GAMES_SUCCESS:
    		console.log('here');
    	 return Object.assign({}, state, { games: action.games });
    }
  return state;

	}


export default gameReducer;
