import store from '../store';

import {loginError,loginSuccess,logoutSuccess} from '../actions/player-actions';
import {clearErrors} from '../actions/error-actions';

import $ from 'jQuery';
var jwtDecode = require('jwt-decode');



export function login(email,password){

//accepts profile object and shop object
   let data={password:password, email:email};
   $.post(`http://localhost:8081/login`,data)
    .done(response => {  
      localStorage.setItem('token', response.token);
     // store.dispatch(clearErrors());
      store.dispatch(loginSuccess(jwtDecode(localStorage.getItem('token')).id));
      return response;
    }).fail(error=>{
            //massage error for error handleer
            //let err = [{type:}]
            store.dispatch(loginError(error.statusText));  //on a fail just pass the errors, not the whole error
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

            }).fail((err)=>{
             
            });
}