import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const OptionContainer = styled.div`
  position : relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 0.8rem 2rem;
  cursor: pointer;
  text-decoration : none;
  font-size : 1.0875rem;
  font-weight: 500;
`;
