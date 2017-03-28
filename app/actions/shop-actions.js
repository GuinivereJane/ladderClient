import * as types from '../actions/action-types';

export function getShopsSuccess(shops) {
  return {
    type: types.GET_SHOPS_SUCCESS,
    shops
  };
}

export function deleteShopSuccess(shopId) {
  return {
    type: types.DELETE_SHOP_SUCCESS,
    shopID
  };
}

export function shopProfileSuccess(shopProfile) {
  return {
    type: types.SHOP_PROFILE_SUCCESS,
    shopProfile
  };
}