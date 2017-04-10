import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  errors:[]
};

const errorReducer = function(state = initialState, action) {
	switch(action.type) {
    case types.POST_ERROR:
      return {...state, errors:action.errors};
    }
  return state;

}

export default errorReducer;


