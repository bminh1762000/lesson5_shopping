import React from "react";

import {
  CartIconContainer,
  IconContainer,
  CountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ setCartHidden }) => {
  return (
    <CartIconContainer onClick={setCartHidden}>
      <IconContainer />
      <CountContainer>{4}</CountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
