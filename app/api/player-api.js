import axios from 'axios';
import store from '../store';
import { getPlayersSuccess,
         deletePlayerSuccess,
         playerProfileSuccess,
         assocStoreToPlayerSuccess } from '../actions/player-actions';

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

export function assocStoreToPlayer(playerProfile,shop){

      let data={'playerProfile':playerProfile,'shop':shop};

   $.post(`http://localhost:8081/users/${playerProfile.id}/stores/${shop.id}`,JSON.stringify(data))
    .then(response => {  
      store.dispatch(assocStoreToPlayerSuccess(data));
      return response;
    }).fail(function() {
    alert( "error" );
  })
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
  let user = $.get('http://localhost:8081/users/' + userId);
  let shop = $.get(`http://localhost:8081/users/${userId}/stores`);

  Promise.all([user,shop]).then((values)=>{
    let user = JSON.parse(values[0]);
    if (values[1] !== null){ 
      let shop= JSON.parse(values[1]);
      user.shop = shop;
    }
    store.dispatch(playerProfileSuccess(user));
    return;
  }, reason =>{
    console.log(reason);
  });

  // return $.get('http://localhost:8081/users/' + userId)
  //   .then(response => {
  //       let user = JSON.parse(response);
  //       store.dispatch(playerProfileSuccess(user));

  //       return;

  //     });

}
