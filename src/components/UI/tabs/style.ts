import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  max-width: 1440px;
  height: 52px;
  width: 100%;
  margin: 2px 0 12px;
`;
export const Link = styled(NavLink)`
  width: 50px;
  height: 25px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  margin: 0 25px 40px 0;
  padding: 0 0 28px 0;
  color: #000000;
  &.active {
    border-bottom: 3px solid #000000;
  }
`;

