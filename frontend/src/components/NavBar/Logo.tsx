import React from "react";
import { LogoImg, LogoImgWrpper } from "./LogoImg";
import logo from "assets/img/youtube_logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Logo() {
  return (
    <LogoImgWrpper>
      <RxHamburgerMenu size={20} cursor="pointer" />
      <Link to="/">
        <LogoImg marginLeft={0} src={logo} alt="youtube" />
      </Link>
    </LogoImgWrpper>
  );
}

export default Logo;
