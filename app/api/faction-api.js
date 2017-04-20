import axios from 'axios';
import store from '../store';
import { getFactionsSuccess} from '../actions/faction-actions';
import $ from 'jQuery';

/**
 * Get all users
 */

export function getFactions() {
  return $.get('http://localhost:8081/factions')
    .then(response => {
      store.dispatch(getFactionsSuccess(JSON.parse(response)));
      return response;
    });
}
