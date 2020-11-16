import CART_ACTIONS_TYPES from './cart.types';

export const toggleCartHidden = () => ({
   type : CART_ACTIONS_TYPES.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
   type : CART_ACTIONS_TYPES.ADD_iTEM_TO_CART,
   payload : item
});

export const removeItemFromCart = (item) => ({
   type : CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART,
   payload : item
});

export const deleteItemFromCart = (item) => ({
   type : CART_ACTIONS_TYPES.DELETE_ITEM_FROM_CART,
   payload : item
});
