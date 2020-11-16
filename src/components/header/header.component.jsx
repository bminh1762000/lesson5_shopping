import React, {useState} from "react";

import { ReactComponent as Logo } from "../../assets/buy.svg";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/">Home</OptionLink>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        <OptionLink to="/sign-in">Sign in</OptionLink>
        <CartIcon setCartHidden={() => setHidden(!hidden)} />
        {hidden ? null : <CartDropdown/>}
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
