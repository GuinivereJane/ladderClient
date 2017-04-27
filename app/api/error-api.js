import React from 'react';

  
  export function errorMessage(errors){
   
    if (errors.length > 0){
      let errorList = errors.map((error)=>{
        return <div className='error' key={error}>{error.type} {error.path}</div>;
      });
      return (<div className = 'error-list'>
                {errorList}
              </div>);
   }else{
      return <div/>
    }
   
  }


   // }else if(errors.length == 1) {
   //    return(<div className="error">{errors[0].message}</div>);
   //  }