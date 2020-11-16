import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 3rem;
  z-index: 99;
  background: #ecf0f1;
  min-height : 200px;
  width : 500px;

  &::after {
    content: " ";
    position: absolute;
    bottom: 100%; /* At the top of the tooltip */
    right : 0%;
    margin-left: -5px;
    border-width: 0.6rem;
    border-style: solid;
    border-color: transparent transparent #ecf0f1 transparent;
  }
`;

export const  NoticeContainer = styled.p`
  text-align : center;
  color : #0984e3;
  font-size : 1.25rem;
`
