import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  shops: [],
  shopProfile: {
  }
};

const shopReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_SHOPS_SUCCESS:
      return Object.assign({}, state, { shops: action.shops });

    case types.DELETE_SHOP_SUCCESS:

      // Use lodash to create a new shop array without the shop we want to remove
      const newShops = _.filter(state.shops, shop => shop.id != action.shopId);
      return Object.assign({}, state, { shops: newshops });

    case types.SHOP_PROFILE_SUCCESS:
      return Object.assign({}, state, { shopProfile: action.shopProfile });

  }

  return state;

}

export default shopReducer;
