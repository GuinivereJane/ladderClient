import axios from 'axios';
import store from '../store';
import { getShopsSuccess, deleteShopSuccess, shopProfileSuccess } from '../actions/shop-actions';
import $ from 'jQuery';


/**
 * Get all shops
 */

export function getShops() {
  return axios.get('http://localhost:8081/stores')

    .then(response => {
      store.dispatch(getShopsSuccess(response.data));
      return response;
    });
}
export function getProfile(shopId) {
  // Start with an empty profile object and build it up
  // from multiple XHR requests.

  // Get the user data from our local database.
  let users = $.get(`http://localhost:8081/stores/${shopId}/users`);
  let shop = $.get(`http://localhost:8081/stores/${shopId}`);

  Promise.all([users,shop]).then((values)=>{
    let shop = JSON.parse(values[1]);
    if (values[0] !== null){ 
      let users = JSON.parse(values[0]);
      shop.players = users;
    }
    store.dispatch(shopProfileSuccess(shop));
    return;
  }, reason =>{
    console.log(reason);
  });
}