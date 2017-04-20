import React from 'react';

  
  export function errorMessage(errors){
    if (errors.length > 0){

      let errorList = errors.map((error)=>{
        return <div classNamne='error'>{error.type} : {error.path}</div>;
      });
      return (<div className = 'error-list'>
                {errorList}
              </div>);
    }else{
      return <div/>
    }
   
  }