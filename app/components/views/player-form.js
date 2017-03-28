import React from 'react';

export class PlayerForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.render = this.render.bind(this);
  // }

  render() {
    return ( 
      <form onSubmit={this.props.savePlayer}  method="POST">
        
        <div className="input-component">
          <label for="firstname">First Name:</label>
          <input type="text" name="firstname"/>
        </div>
      
        <div className="input-component">
          <label for="lastname">Last Name:</label>
          <input type="text" name="lastname"/>
        </div>

        <div className="input-component">
          <label for="email">Email:</label>
          <input type="text" name="email"/>
        </div>

        <input type="submit" value="Submit" />
      </form>
     
    );
  }
};

export default PlayerForm;
