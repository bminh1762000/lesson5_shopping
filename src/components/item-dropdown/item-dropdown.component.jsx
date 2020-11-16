import React from "react";

import {ItemDropdownContainer, ItemImageContainer} from './item-dropdown.styles'


const ItemDropdown = ({ title, imageUrl, quantity, price }) => {
  return (
    <ItemDropdownContainer>
      <ItemImageContainer />
      <p className="title">Jackets Premium</p>
      <p className="price">229$ * 2</p>
      <p className="delete">Delete</p>
    </ItemDropdownContainer>
  );
};

export default ItemDropdown;