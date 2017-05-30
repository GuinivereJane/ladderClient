import * as types from '../actions/action-types';



export function getChallengeDetails(challenge) {
  return {
    type: types.GET_CHALLENGE_SUCCESS,
    challenge
  };
}

export function getAllChallenges(challenges){
  return {
    type: types.GET_CHALLENGES_SUCCESS,
    challenges
  };
}