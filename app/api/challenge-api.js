
import store from '../store';
import {getChallengeDetails,getAllChallenges} from '../actions/challenge-actions';
import {clearErrors, errors} from '../actions/error-actions';

import $ from 'jQuery';

/**
 * Get all users
 */

export function getChallenges() {

	return $.get(`http://localhost:8081/challenges`)
    .then(response => { 
      store.dispatch(getAllChallenges(JSON.parse(response)));
      return response;
    });
 }

export function getChallenge(id) {
  return $.get(`http://localhost:8081/challenge/${id}`)
    .then(response => { 
      store.dispatch(getChallengeDetails(response));
      return response;
    });
}

export function acceptChallenge(id){
	return $.get(`${process.env.url}/challenge/${id}/accept`)
						.done(response =>{
							return response;
						}).fail(error=>{

     					 store.dispatch(clearErrors());
     					 store.dispatch(errors(error.responseJSON));  //on a fail just pass the errors, not the whole error
        			return false;});
}


