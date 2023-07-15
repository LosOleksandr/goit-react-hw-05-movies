import { Outlet } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Suspense } from "react";
import {
  Header,
  HeaderContainer,
  NavMenu,
  StyledLink,
  Logo,
} from "./SharedLayout.styled";
import Loader from "@components/Loader/Loader";

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
