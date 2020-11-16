import CART_ACTIONS_TYPES from "./cart.types";

import {addItemToCart, removeItemFromCart, deleteItemFromCart} from './cart.ultis'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden : !state.hidden,
      };
    case CART_ACTIONS_TYPES.ADD_iTEM_TO_CART:
      return {
        ...state,
        cartItems : addItemToCart(state.cartItems, action.payload),
      };
    case CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CART_ACTIONS_TYPES.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems : deleteItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;