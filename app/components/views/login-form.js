import React from 'react';
import {Errors} from './view-helpers/error-message';

export class LoginForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.render = this.render.bind(this);
  // }


  render() {

     let errors = <div/>;
    if (this.props.errors){
      let errorHelper = new Errors(this.props.errors);
      errors = errorHelper.errorMessage();
    }
        
    return (
    <div className='post-form'> 
      {errors}
      <form onSubmit={this.props.onLogin}  method="POST">
        
        <div className="input-component">
          <label htmlFor="email">Email Address:</label>
          <input type="text" name="email"/>
        </div>
      
        <div className="input-component">
          <label htmlFor="password">Password</label>
          <input type="password" name="password"/>
        </div>

        <input type="submit" value="Submit" />
      </form>
            <form onSubmit={this.props.onSecret}  method="POST">
                    <input type="submit" value="Secret" />

            </form>
             <form onSubmit={this.props.onLogout}  method="POST">
                    <input type="submit" value="logout" />

            </form>
      </div>
     
    );
  }
};

export default LoginForm;
