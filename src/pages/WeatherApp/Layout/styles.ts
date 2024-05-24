import styled from "@emotion/styled"
import { WeatherBack } from "assets";
import { Link } from "react-router-dom";

export const LayoutAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherBack});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 25px 85px;
  border-bottom: 1px #d2d2d2 solid;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8px);
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const HeaderTitle = styled.h2`
  font-size: 24px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 60px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;


export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;


