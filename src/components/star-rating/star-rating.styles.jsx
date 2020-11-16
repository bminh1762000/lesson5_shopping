import styled from "styled-components";

const StarContainer = styled.div`
  height: 18px;
  width: 18px;
  margin: 2px;
  float: left;
  background-color: ${({selected}) => selected ? '#FFC312' : 'grey'};
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );

  @media screen and (max-width: 800px){
    width : 15px;
    height : 15px;
  }
`;

export default StarContainer;