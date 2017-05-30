
import React from 'react';

export class Errors{

	constructor(e){
		this.errors = e
	}

	errorMessage(){
		if (this.errors.length > 0){
		  if (this.errors[0].type == "unauthorized"){
		    return <div classNamne='error'>You need to log in to preform that action</div>
		  }else{
		    let errorList = this.errors.map((error)=>{
		      return <div key={error.type} classNamne='error'>{error.type} : {error.path}</div>;
		    });
		    return (<div className = 'error-list'>
		              {errorList}
		            </div>);
		  }
		}else{
		  return <div/>
		}
	}
}

