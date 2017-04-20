import React from 'react';
import SearchFormContainer from '../containers/search-form-container'


export class SearchLayout extends React.Component {
  render() {
    return (
      <div>
        <SearchFormContainer searchType={this.props.route.searchType}/>
        {this.props.children}
      </div>
    );
  }
};

export default SearchLayout;
