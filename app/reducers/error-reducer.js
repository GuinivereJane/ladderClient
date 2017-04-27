import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  errors:[]
};

//error handle epects an array of errors with Type and Path
const errorReducer = function(state = initialState, action) {
	switch(action.type) {
    case types.CLEAR_ERRORS:
    	return {...state,errors:[]}
    case types.POST_ERROR:
      return {...state, errors:action.errors};
    case types.LOGIN_ERROR:
    	let error = {}
    	error.type = "Failed Login"
    	error.path = action.errors[0]
      return {...state, errors:[error]};
    }
  return state;
}

export default errorReducer;


// {"message":"no such user found"}


// [{"type":"Validation error","path":"firstname"},{"type":"Validation error","path":"lastname"},{"type":"Validation error","path":"email"}]