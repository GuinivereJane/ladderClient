import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  players: [],
  playerProfile: {
    repos: []
  }
};

const playerReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PLAYERS_SUCCESS:
      return Object.assign({}, state, { players: action.players });

    case types.DELETE_PLAYER_SUCCESS:
      // Use lodash to create a new player array without the player we want to remove
      const newPlayers = _.filter(state.players, player => player.id != action.playerId);
      console.log(newPlayers);
      return Object.assign({}, state, { players: newPlayers });

    case types.PLAYER_PROFILE_SUCCESS:
      return Object.assign({}, state, { playerProfile: action.playerProfile });

  }

  return state;

}

export default playerReducer;
