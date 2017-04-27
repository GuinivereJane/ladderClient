import React from 'react';
import {connect} from 'react-redux';
import ShopList from '../views/shop-list';
import * as shopApi from '../../api/shop-api';
import { searchUpdate } from '../../actions/search-layout-actions';
import store from '../../store';

//store is the redux store shop is the data object.  
export class ShopListContainer extends React.Component {

	componentDidMount(){
		shopApi.getShops()
			.then(()=>{store.dispatch(searchUpdate(this.props.shops))});
		}

	render(){
		return (
			<ShopList shops={this.props.shops} searchResults={this.props.searchResults}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	shops: store.shopState.shops,

  	searchResults :store.searchState.searchResults


	};
};

export default connect(mapStateToProps)(ShopListContainer);
