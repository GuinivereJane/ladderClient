import store from '../store';
import {saveGameSuccess} from '../actions/game-actions';
import $ from 'jQuery';

export function saveGame(data){
      $.post('http://localhost:8081/games',data)
      .then(response =>{
      	//console.log(saveGameSuccess(data))
      	store.dispatch(saveGameSuccess(data));
        return response;
      }
      );
    
 }