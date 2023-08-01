import { Link } from "react-router-dom";
import Logo from "./NavBar/Logo";
import { NavBarWrpper, NavLinkWrapper, StyledNavLink } from "./NavBar/LogoImg";
import SearchBar from "./NavBar/SearchBar";
import Camera from "assets/img/camera.png";
import Alarm from "assets/img/alarm.png";
import Mypage from "assets/img/mypage.png";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default function NavBar() {
  const link = [
    {
      page: "camera",
      img: Camera,
      href: "/camera",
    },

    {
      page: "Alarm",
      img: Alarm,
      href: "/alram",
    },
    {
      page: "MyPage",
      img: Mypage,
      href: "/mypage",
    },
  ];
  return (
    <NavBarWrpper>
      <Logo />
      <SearchBar />
      <NavLinkWrapper>
        {link.map((link) => (
          <StyledNavLink key={link.page} to={link.href}>
            <img src={link.img} alt={link.page} />
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavBarWrpper>
  );
}
