import styled from 'styled-components';

export const ItemDropdownContainer = styled.div`
   display : flex;
   align-items : center;
   padding : 1rem 2rem;

   .title{
      margin-right : 2rem;
   }

   .price{
      margin-right : 2.5rem;
   }

   .delete{
      color : #ff3838;
      cursor : pointer;
   }

   
`

export const ItemImageContainer = styled.div`
   background-image : ${({imageUrl}) => `url(${imageUrl})`};
   background-position : center;
   width : 4em;
   height : 4rem;
`