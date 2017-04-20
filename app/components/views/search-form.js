import React from 'react';

// .bind(null,this.props.profile.id,shop.id)
export class SearchForm extends React.Component {
  
  render() {

    
    let dataList = (<datalist id="options">{this.props.dataOptions}</datalist>);


    
  	return(
  		<div className="SearchForm">
  			<form  onSubmit={this.props.submit.bind(this)} method="POST">
          {dataList}
	  			<div className="input-component">
	          <input onChange={this.props.change.bind(this)} 
                   autoComplete="off"
                   list="options"
                   type="text" 
                   name="search"
                   placeholder="search by name"/>
	        </div>
	        <input type="submit" value="Submit" />
	      </form>
      </div>
  	);
  }
}
 
export default SearchForm;