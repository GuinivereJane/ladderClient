import React from 'react';
import {Errors} from './view-helpers/error-message';


export class PlayerForm extends React.Component {
  
  render() {
 

    let errors = <div/>;
    if (this.props.errors){
      let errorHelper = new Errors(this.props.errors);
      errors = errorHelper.errorMessage();
    }

    return (
    <div className='post-form'> 
      {errors}
      <form onSubmit={this.props.savePlayer}  method="POST">
        
        <div className="input-component">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" name="firstname"/>
        </div>
      
        <div className="input-component">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" name="lastname"/>
        </div>

        <div className="input-component">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email"/>
        </div>

         <div className="input-component">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password"/>
        </div>

        <input type="submit" value="Submit" />
      </form>
      </div>
     
    );
  }
};

export default PlayerForm;
