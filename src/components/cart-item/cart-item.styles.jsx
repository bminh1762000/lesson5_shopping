import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CartItemContainer = styled.div`
   position: relative;
   width: 100%;
   min-height: 360px;
   background-color: #2d3436;
   border-radius: 0.2rem;
   box-shadow : 2px 5px 15px #2c3e50;
   margin-right : 1rem;
   margin-bottom : 2rem;

   @media screen and (max-width : 800px){
      width: 95%;
      margin-bottom : 1rem;
   }
`;

export const RatingContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.3rem;
`;

export const ImageCartContainer = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 0.2rem;
`;

export const DetailsContainer = styled.div`
  margin-left: 1rem;

  .title {
    color: white;
    font-size: 26px;
    margin-bottom: 0;
  }

  .price {
    color: #2196f3;
    font-size: 28px;
    font-weight: 700;
    margin-top: 0;
  }

  @media screen and (max-width : 800px){
    .title{
      font-size : 20px;
      margin-bottom : 1rem;
    }

    .price{
      font-size : 24px;
    }
 }
`;

export const AddButton = styled(CustomButton)`
  margin-left: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background: #74b9ff;
    box-shadow: 1px 2px 15px #636e72;
  }
`;
