import $ from 'jQuery';


export function login(name,password){
//accepts profile object and shop object
   let data={password:password, name:name};
console.log(data);
   $.post(`http://localhost:8081/login`,data)
    .then(response => {  
      localStorage.setItem('token', response.token);
      return response;
    }).fail(function() {
    alert( "error" );
  })
}

export function logout(){
  localStorage.removeItem('token');

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