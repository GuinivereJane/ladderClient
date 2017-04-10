import React from 'react';

export class PlayerForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.render = this.render.bind(this);
  // }


  errorMessage(errors){
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
  render() {

    let errors = this.errorMessage(this.props.errors);

        

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

        <input type="submit" value="Submit" />
      </form>
      </div>
     
    );
  }
};

export default PlayerForm;
