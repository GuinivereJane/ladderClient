import * as types from '../actions/action-types';

export function saveGameSuccess(game) {
  return {
    type: types.SAVE_GAME_SUCCESS,
    game
  };
}