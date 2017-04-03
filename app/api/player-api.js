import axios from 'axios';
import store from '../store';
import { getPlayersSuccess, deletePlayerSuccess, playerProfileSuccess } from '../actions/player-actions';

var $ = require('jQuery');

/**
 * Get all users
 */

export function getPlayers() {
  return axios.get('http://localhost:8081/users')
    .then(response => {
      store.dispatch(getPlayersSuccess(response.data));
      return response;
    });
}

/**
 * Search users
 */

// export function searchUsers(query = '') {
//   return axios.get('http://localhost:3001/users?q='+ query)
//     .then(response => {
//       store.dispatch(getUsersSuccess(response.data));
//       return response;
//     });
// }

/**
 * Delete a user
 */
 export function savePlayer(data){
      
      $.post('http://localhost:8081/users',data)
      .then(response =>{
        return response;
      }
      );
    
 }

export function deletePlayer(playerId) {
  return axios.delete('http://localhost:8081/users/' + playerId)
    .then(response => {
      store.dispatch(deletePlayerSuccess(playerId));
      return response;
    });
}

// /**
//  * getProfile() is much more complex because it has to make
//  * three XHR requests to get all the profile info.
//  */

export function getProfile(userId) {
  // Start with an empty profile object and build it up
  // from multiple XHR requests.

  // Get the user data from our local database.
  return $.get('http://localhost:8081/users/' + userId)
    .then(response => {
        let user = JSON.parse(response);

   
          store.dispatch(playerProfileSuccess(user));

        return;

      });

}
