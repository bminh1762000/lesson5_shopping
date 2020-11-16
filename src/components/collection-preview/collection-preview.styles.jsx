import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
   margin-bottom : 1.5rem;

   @media screen and (max-width: 800px){
      margin-bottom : 1rem;
   }
`;

export const CollectionTitle = styled.h1`
  font-size : 2rem;
  font-weight: 600;
  margin-bottom : 1rem;
  cursor : pointer;

  @media screen and (max-width: 800px) {
   font-size : 1.6rem;
   text-align: center;
   margin-bottom : 1.3rem;
 }

`

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;
