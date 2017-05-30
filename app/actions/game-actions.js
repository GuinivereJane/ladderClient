import * as types from '../actions/action-types';

export function saveGameSuccess(game) {
  return {
    type: types.SAVE_GAME_SUCCESS,
    game
  };
}

export function getGamesSuccess(games) {

  return {
    type: types.GET_GAMES_SUCCESS,
    games
  };
}

export function saveGameFailure(errors) {
  return {
    type: types.POST_ERROR,
    errors
  };
}
