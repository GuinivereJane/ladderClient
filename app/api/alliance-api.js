import axios from 'axios';
import store from '../store';
import { getAlliancesSuccess} from '../actions/alliance-actions';
import $ from 'jQuery';

/**
 * Get all users
 */

export function getAlliances() {
  return $.get('http://localhost:8081/alliances')
    .then(response => {
      store.dispatch(getAlliancesSuccess(JSON.parse(response)));
      return response;
    });
}
