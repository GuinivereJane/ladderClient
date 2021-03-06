import axios from 'axios';
import store from '../store';
import { getPlayersSuccess,
         deletePlayerSuccess,
         playerProfileSuccess,
         assocStoreToPlayerSuccess,
         removeStoreFromPlayerSuccess,
         savePlayerSuccess,
         savePlayerFailure} from '../actions/player-actions';

import { clearErrors} from '../actions/error-actions';

         
import $ from 'jQuery';

/**
 * Get all users
 */

export function getPlayers() {
  return axios.get(`${process.env.url}/users`)
    .then(response => {
      store.dispatch(getPlayersSuccess(response.data));
      return response;
    });
}

export function assocStoreToPlayer(playerProfile,shop){
//accepts profile object and shop object
   let data={'playerProfile':playerProfile,'shop':shop};

   $.post(`http://localhost:8081/users/${playerProfile.id}/stores/${shop.id}`,JSON.stringify(data))
    .then(response => {  
      store.dispatch(assocStoreToPlayerSuccess(data));
      return response;
    }).fail(function() {
    alert( "error" );
  })
}

export function removeStoreFromPlayer(playerId,shopId){

  let data={'playerId':playerId,'shopId':shopId};

  $.ajax({
    url: `http://localhost:8081/users/${playerId}/stores/${shopId}`,
    type: 'DELETE',
    }).then(response => {  
      console.log(removeStoreFromPlayerSuccess(data))
      store.dispatch(removeStoreFromPlayerSuccess(data));
      return response;
    }).fail(function() {
    alert( "error" );
  })
}


 export function savePlayer(newPlayer){
      
     return $.post('http://localhost:8081/users',newPlayer)
      .done(response=>{
        store.dispatch(savePlayerSuccess(newPlayer));
        return true;})
      .fail(error=>{
      store.dispatch(clearErrors());

      store.dispatch(savePlayerFailure(error.responseJSON));  //on a fail just pass the errors, not the whole error
        return false;});
     //if there is an error update an error state in flux, the form will detect it in props and show the result
    
 }

export function deletePlayer(playerId) {
  return axios.delete('http://localhost:8081/users/' + playerId)
    .then(response => {
      store.dispatch(deletePlayerSuccess(playerId));
      return response;
    });
}
export function challengePlayer(challengerId, challengedId) {
  return $.get(`http://localhost:8081/challenge/${challengerId}/${challengedId}`)
    .then(response => {
      return response;
    });
  //console.log(challengerId + "-challenger|" + challengedId + "-challenged")
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


  //     });

}
