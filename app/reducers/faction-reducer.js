import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  aliances: []
  
};

const factionReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_FACTIONS_SUCCESS:
      return Object.assign({}, state, { factions: action.factions });
     }
    return state;

	
}

export default factionReducer;