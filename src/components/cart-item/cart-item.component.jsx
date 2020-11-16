import React from "react";

import StarRating from "../star-rating/star-rating.component";

import {CartItemContainer, ImageCartContainer, RatingContainer, DetailsContainer, AddButton} from './cart-item.styles'

const CartItem = ({ imgUrl, title, price, rating }) => (
  <CartItemContainer>
    <RatingContainer>
      {[...Array(5)].map((item, i) => (
        <StarRating key={i} selected={i < rating} />
      ))}
    </RatingContainer>
    <ImageCartContainer src={imgUrl}/>
    <div className="details">
      <DetailsContainer>
        <h1 className="title">{title}</h1>
        <p className="price">{`$${price}.00`}</p>
      </DetailsContainer>
      <AddButton>Add to cart</AddButton>
    </div>
  </CartItemContainer>
);

export default CartItem;
