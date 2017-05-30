import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  challenge: {},
  challenges:[]
  
};

const challengeReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_CHALLENGE_SUCCESS:
      return Object.assign({}, state, { challenge: action.challenge });
     
    case types.GET_CHALLENGES_SUCCESS:
      return Object.assign({}, state, { challenges: action.challenges });
     }
    return state;

	
}

export default challengeReducer;