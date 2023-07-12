import { Outlet } from "react-router-dom";
import logo from "../../images/logo.svg";
import {
  Header,
  HeaderContainer,
  NavMenu,
  StyledLink,
  Logo,
} from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo to="/">
            <img src={logo} alt="logo" />
            <span>Cinemania</span>
          </Logo>
          <NavMenu>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </NavMenu>
        </HeaderContainer>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
