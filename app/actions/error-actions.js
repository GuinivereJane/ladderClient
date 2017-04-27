import * as types from '../actions/action-types';



export function unauthorizedError() {
  let errors = [{type:'unauthorized'}];
  return {
    type: types.POST_ERROR,
    errors
  };
}

export function clearErrors() {
  let errors = [];
  return {
    type: types.CLEAR_ERRORS,
    errors
  };
}