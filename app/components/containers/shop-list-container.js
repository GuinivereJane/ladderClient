import React from 'react';
import {connect} from 'react-redux';
import ShopList from '../views/shop-list';
import * as shopApi from '../../api/shop-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import store from '../../store';

//store is the redux store shop is the data object.  
export class ShopListContainer extends React.Component {

	componentDidMount(){
		shopApi.getShops();
		store.dispatch(loadSearchLayout('shops', 'Shop Results'));
	}

	render(){
		return (
			<ShopList shops={this.props.shops}/>
			);
	}
}

const mapStateToProps = function(store) {
	return {
  	shops: store.shopState.shops
	};
};

export default connect(mapStateToProps)(ShopListContainer);
