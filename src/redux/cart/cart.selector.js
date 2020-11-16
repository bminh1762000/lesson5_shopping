import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectHiddenCart = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedCount, cartItem) => accumulatedCount + cartItem.quantity,
      0
    )
);
