import axios from 'axios';
import store from '../store';
import { getPlayersSuccess, deletePlayerSuccess, PlayerProfileSuccess } from '../actions/player-actions';

var $ = require('jQuery');

/**
 * Get all users
 */

export function getPlayers() {
  return axios.get('http://localhost:8081/players')
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
      
      $.post('http://localhost:8081/players',data)
      .then(
         window.location = "http://localhost:3000/players"
      );
    // return axios.post('/players',data,{baseURL:'http://localhost:8081',method:'POST',type:'text'})
    //   .then(
    //    // window.location = "http://localhost:3000/players"  
    //  );
 }

export function deletePlayer(playerId) {
  return axios.delete('http://localhost:8081/players/' + playerId)
    .then(response => {
      store.dispatch(deletePlayerSuccess(playerId));
      return response;
    });
}

// /**
//  * getProfile() is much more complex because it has to make
//  * three XHR requests to get all the profile info.
//  */

// export function getProfile(userId) {

//   // Start with an empty profile object and build it up
//   // from multiple XHR requests.
//   let profile = {};

//   // Get the user data from our local database.
//   return axios.get('http://localhost:3001/users/' + userId)
//     .then(response => {

//       let user = response.data;
//       profile.name = user.name;
//       profile.twitter = user.twitter;
//       profile.worksOn = user.worksOn;

//       // Then use the github attribute from the previous request to
//       // sent two XHR requests to GitHub's API. The first for their
//       // general user info, and the second for their repos.
//       return Promise.all([
//         axios.get('https://api.github.com/users/' + user.github),
//         axios.get('https://api.github.com/users/' + user.github + '/repos')
//       ]).then(results => {

//         let githubProfile = results[0].data;
//         let githubRepos = results[1].data;

//         profile.imageUrl = githubProfile.avatar_url;
//         profile.repos = githubRepos;

//         store.dispatch(userProfileSuccess(profile));

//         return;

//       });

//     });

//}
