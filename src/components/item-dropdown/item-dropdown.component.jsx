import React from "react";
import { connect } from "react-redux";

import { deleteItemFromCart } from "../../redux/cart/cart.actions";

import {
  ItemDropdownContainer,
  ItemImageContainer,
} from "./item-dropdown.styles";

const ItemDropdown = ({ cartItem, deleteItem }) => {
  const {title, imgUrl, price, quantity} = cartItem;
  return (
    <ItemDropdownContainer>
      <ItemImageContainer imageUrl={imgUrl} />
      <p className="title">{title}</p>
      <p className="price">{`${price}.00$ * ${quantity}`}</p>
      <p className="delete" onClick={() => deleteItem(cartItem)}>Delete</p>
    </ItemDropdownContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemDropdown);
