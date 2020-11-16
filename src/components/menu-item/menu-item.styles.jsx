import styled from 'styled-components';

export const MenuItemContainer = styled.div`
   position : relative;
   height : 240px;
   ${({size}) => size==="large" ? "min-width: 500px;" : "min-width: 380px;"}
   margin-right : 1rem;
   margin-bottom : 1.5rem;
   overflow : hidden;
   cursor : pointer;
   box-shadow : 3px 4px 12px #617786;
   border-radius : 0.2rem;
`

export const MenuItemImage = styled.div`
   background-image : ${({imageUrl}) => `url(${imageUrl})`};
   background-position : center;
   background-repeat : no-repeat;
   background-origin : border-box;
   width: 100%;
   height : 100%;
   border-radius : 0.2rem;

   &:hover{
      transform : scale(1.105);
      transition : transform 5s;
   }
`
export const CategoryContainer = styled.div`
   position : absolute;
   top: 50%;
   left: 50%;
   background : #ffffff;
   transform : translate(-50%, -50%);
   text-align : center;
   padding : 0.2rem 1.5rem;
   color : black;
   opacity : 0.6;
   border-radius : 0.25rem;

   p{
      font-size : 1rem;
      font-weight : 600;
   }

`