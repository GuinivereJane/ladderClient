import * as types from '../actions/action-types';

export function getFactionsSuccess(factions) {
  return {
    type: types.GET_FACTIONS_SUCCESS,
    factions
  };
}