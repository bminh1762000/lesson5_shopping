import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemCount,
} from "../../redux/cart/cart.selector";

import ItemDropdown from "../item-dropdown/item-dropdown.component";

import { CartDropdownContainer, NoticeContainer } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, itemCount }) => {
  return (
    <CartDropdownContainer>
      {itemCount !==0 ? (
        cartItems.map((cartItem) => (
          <ItemDropdown key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <NoticeContainer>No have item</NoticeContainer>
      )}
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemCount,
});

export default connect(mapStateToProps)(CartDropdown);
