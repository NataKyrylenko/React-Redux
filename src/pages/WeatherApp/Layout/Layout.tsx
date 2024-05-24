import { StyledNavLink } from "pages/UsersApp/Layout/styles"
import { Header, HeaderTitle, LayoutAppWrapper, Main, NavContainer } from "./styles"
import { LayoutProps } from "./types";

function Layout({children}: LayoutProps) {
  return (
    <LayoutAppWrapper>
      <Header>
        <HeaderTitle>Weather App</HeaderTitle>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/weather"
          >
            Weathers
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutAppWrapper>
  )
}

export default Layout;
