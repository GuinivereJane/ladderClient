import store from '../store';
import {saveGameSuccess,
				saveGameFailure} from '../actions/game-actions';
import {unauthorizedError} from '../actions/error-actions';
import $ from 'jQuery';

export function saveGame(data){
      return $.post('http://localhost:8081/games',data)
      .then(response =>{store.dispatch(saveGameSuccess(data));
        return true;})
      .fail((error)=>{
      	if (error.status == 401){
      		store.dispatch(unauthorizedError());
      	}else{
      		store.dispatch(saveGameFailure(error.responseJSON));
      	}
      	return false});
    
 }

 // export function savePlayer(newPlayer){
      
 //     return $.post('http://localhost:8081/users',newPlayer)
 //      .done(response=>{store.dispatch(savePlayerSuccess(newPlayer));
 //        return true;})
 //      .fail(error=>{store.dispatch(savePlayerFailure(error.responseJSON));  //on a fail just pass the errors, not the whole error
 //        return false;});
 //     //if there is an error update an error state in flux, the form will detect it in props and show the result
    
 // }