import store from '../store';
import {playerError} from '../actions/player-actions';

import $ from 'jQuery';
var jwtDecode = require('jwt-decode');



export function login(email,password){

//accepts profile object and shop object
   let data={password:password, email:email};
   $.post(`http://localhost:8081/login`,data)
    .done(response => {  
      localStorage.setItem('token', response.token);
      store.dispatch(loginSuccess(jwtDecode(localStorage.getItem('token')).id));
      return response;
    }).fail(error=>{
            //massage error for error handleer
            console.log(error.responseJSON);
            //let err = [{type:}]
            store.dispatch(playerError(error.responseJSON));  //on a fail just pass the errors, not the whole error
        return false;});  
}

export function logout(){
  localStorage.removeItem('token');
  store.dispatch(logoutSuccess("-1"));
}

export function secret(){ 
    return $.ajax({
              url: "http://localhost:8081/secret",
              type: 'GET',
              headers: {"Authorization": `JWT ${localStorage.getItem('token')}`}
           })
            .done(response => {
             console.log(response)

            }).fail((err)=>{console.log(err)});
}