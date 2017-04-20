import * as types from '../actions/action-types';

export function loginSuccess(playerId) {
  return {
    type: types.LOGIN_SUCCESS,
    playerId
  };
}

export function playerError(error){
   let errors=[error];  //put singular error into an arrary for the error handler
   return {
    type: types.POST_ERROR,
    errors
  };
 }


export function logoutSuccess(playerId) {
  return {
    type: types.LOGOUT_SUCCESS,
    playerId
  };
}

export function getPlayersSuccess(players) {
  return {
    type: types.GET_PLAYERS_SUCCESS,
    players
  };
}
export function savePlayerSuccess(newPlayer) {
  return {
    type: types.POST_SAVE_PLAYER_SUCCESS,
    newPlayer
  };
}
export function savePlayerFailure(errors) {
  //errors are generic, and are handeld by the error reducer
  return {
    type: types.POST_ERROR,
    errors
  };
}
export function deletePlayerSuccess(playerId) {
  return {
    type: types.DELETE_PLAYER_SUCCESS,
    playerId
  };
}

export function playerProfileSuccess(playerProfile) {
  return {
    type: types.PLAYER_PROFILE_SUCCESS,
    playerProfile
  };
}

export function removeStoreFromPlayerSuccess(data) {
  return {
    type: types.POST_REMOVE_STORE_PLAYER_SUCCESS,
    data
  };
}

export function assocStoreToPlayerSuccess(data) {
  return {
    type: types.POST_ASSOC_STORE_PLAYER_SUCCESS,
    data
  };
}