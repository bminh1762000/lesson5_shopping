import styled from 'styled-components';

export const ItemDropdownContainer = styled.div`
   display : flex;
   align-items : center;
   padding : 1rem 2.2rem;
   justify-content : space-between;
   text-algin : left;

   .title{
      text-align : left;
   }

   .delete{
      color : #ff3838;
      cursor : pointer;
   }

`

export const ItemImageContainer = styled.div`
   background-image : ${({imageUrl}) => `url(${imageUrl})`};
   background-position : cover;
   background-size : cover;
   width : 4em;
   height : 4rem;
`