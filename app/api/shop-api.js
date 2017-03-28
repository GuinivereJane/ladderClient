import axios from 'axios';
import store from '../store';
import { getShopsSuccess, deleteShopSuccess, ShopProfileSuccess } from '../actions/shop-actions';

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
