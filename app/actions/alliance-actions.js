import * as types from '../actions/action-types';



export function getAlliancesSuccess(alliances) {
  return {
    type: types.GET_ALLIANCES_SUCCESS,
    alliances
  };
}