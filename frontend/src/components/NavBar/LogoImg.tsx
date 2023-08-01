import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface LogoImgProps {
  width?: number;
  marginLeft?: number;
}

const LogoImg = styled.img<LogoImgProps>`
  width: ${({ width }) => (width ? `${width}px}` : "95px")};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}rem` : "0")};
  cursor: pointer;
`;

const LogoImgWrpper = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 0 0.7rem;
`;

const NavBarWrpper = styled.nav`
  width: 100%;
  height: 3.5rem;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
`;

const NavLinkWrapper = styled.div`
  width: 11%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  img {
    width: 38px;
    height: 37px;
    margin-left: 0.25rem;
  }

  /* &:hover {
    border: 1px solid red;
    border-radius: 100%;
  } */
`;

export { LogoImg, LogoImgWrpper, NavBarWrpper, NavLinkWrapper, StyledNavLink };
