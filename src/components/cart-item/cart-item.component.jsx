import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import StarRating from "../star-rating/star-rating.component";

import {
  CartItemContainer,
  ImageCartContainer,
  RatingContainer,
  DetailsContainer,
  AddButton,
} from "./cart-item.styles";

const CartItem = ({ item, addItemToCart }) => {
  const { imgUrl, title, price, rating } = item;
  return (
    <CartItemContainer>
      <RatingContainer>
        {[...Array(5)].map((item, i) => (
          <StarRating key={i} selected={i < rating} />
        ))}
      </RatingContainer>
      <ImageCartContainer src={imgUrl} />
      <div className="details">
        <DetailsContainer>
          <h1 className="title">{title}</h1>
          <p className="price">{`$${price}.00`}</p>
        </DetailsContainer>
        <AddButton onClick={() => addItemToCart(item)}>Add to cart</AddButton>
      </div>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
