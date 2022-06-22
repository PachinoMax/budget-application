import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  max-width: 1366px;
  height: 52px;
  width: 100%;
  margin: 40px 0 15px;
`;
export const Link = styled(NavLink)`
  width: 50px;
  height: 25px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  margin: 0 25px 40px 0;
  color: #000000;
  &.active {
    border-bottom: 2px solid #000000;
  }
`;

