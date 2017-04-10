import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  players: [],
  playerProfile: {
    repos: []
  },
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
      return {...state, playerProfile: action.playerProfile };

    case types.POST_ASSOC_STORE_PLAYER_SUCCESS:
      const newProfile = {...action.data.playerProfile, shop: action.data.shop};
      newProfile.StoreId = action.data.shop.id;
      return {...state, playerProfile: newProfile };

    case types.POST_REMOVE_STORE_PLAYER_SUCCESS:
      const removeProfile = {...state.playerProfile, StoreId:null, shop:null};
      return {...state, playerProfile:removeProfile}
      //return Object.assign({}, state,{playerProfile:removeProfile});
    
    case types.POST_SAVE_PLAYER_SUCCESS:
      
      return {...state}
      
  }

  return state;

}

export default playerReducer;
