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
      const newDeletePlayers = _.filter(state.players, player => player.id != action.playerId);
      return Object.assign({}, state, { players: newDeletePlayers });

    case types.PLAYER_PROFILE_SUCCESS:
      return Object.assign({}, state, { playerProfile: action.playerProfile });

    case types.POST_ASSOC_STORE_PLAYER_SUCCESS:
     
      // let newProfile = action.data.playerProfile;
      // newProfile.StoreId = action.data.shop.id;
      // newProfile.shop = action.data.shop;
      let newProfile = Object.assign({}, action.data.playerProfile, {shop: action.data.shop});
      newProfile.StoreId = action.data.shop.id;

      return Object.assign({}, state, { playerProfile: newProfile });
      
  }

  return state;

}

export default playerReducer;
