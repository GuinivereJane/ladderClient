import * as types from '../actions/action-types';

export function searchUpdate(searchResults) {
  return {
    type: types.SEARCH_UPDATE,
    searchResults
  };
}


export function searchInit(searchInitData) {
  return {
    type: types.SEARCH_INIT,
    searchInitData
  };
}