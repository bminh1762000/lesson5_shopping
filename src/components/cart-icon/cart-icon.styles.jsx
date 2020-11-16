import styled from 'styled-components';

import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
   position : relative;
   cursor : pointer;
`

export const IconContainer = styled(CartIcon)`
   width : 24px;
   height : 24px;
`

export const CountContainer = styled.p`
   position : absolute;
   top : -0.5rem;
   right : 0.55rem;
   font-size : 14px;
`