import React from 'react';

import ItemDropdown from '../item-dropdown/item-dropdown.component';

import {CartDropdownContainer} from './cart-dropdown.styles'

const CartDropdown = () => {
   return (
      <CartDropdownContainer>
         <ItemDropdown />
      </CartDropdownContainer>
   )
};

export default CartDropdown;