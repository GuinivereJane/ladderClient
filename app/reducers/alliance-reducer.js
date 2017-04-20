import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  aliances: []
  
};

const allianceReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_ALLIANCES_SUCCESS:
      return Object.assign({}, state, { alliances: action.alliances });
     }
    return state;

	
}

export default allianceReducer;