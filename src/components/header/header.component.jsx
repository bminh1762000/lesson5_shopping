import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/buy.svg";

import { selectHiddenCart } from "../../redux/cart/cart.selector";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ hidden }) => {
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
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </OptionContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectHiddenCart,
});

export default connect(mapStateToProps)(Header);
