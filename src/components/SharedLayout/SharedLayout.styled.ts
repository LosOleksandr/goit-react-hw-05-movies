import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 1rem 0;
  background-color: #5c8984;
`;

export const HeaderContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  img {
    width: 1.2rem;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #f5f5f5;
  :hover {
    color: #f1e0ac;
  }
  &.active {
    color: #f1e0ac;
  }
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  gap: 0.5rem
`



export const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
