import * as types from '../actions/action-types';

const initialState = {
  searchResults:[]
};

const searchReducer = function(state = initialState, action) {
	switch(action.type) {
    case types.SEARCH_UPDATE:
      return {...state, searchResults:action.searchResults};
      
    }
  return state;

}

export default searchReducer;

