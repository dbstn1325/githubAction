import React from "react";
import { slide as Menu, State } from "react-burger-menu";
import { FaBeer } from "react-icons/fa";
import Mypage from "assets/img/mypage.png";
import { BurgerMenuWrapper } from "./BurgerMenuStyle";

function BurgerMenu() {
  return (
    <BurgerMenuWrapper>
      <Menu
        customBurgerIcon={<img src={Mypage} sizes={"5rem"} />}
        //   customCrossIcon={<img src={Mypage} />}
        // onStateChange={this.onStateChange}
        itemListElement="div"
        styles={{}}
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
      </Menu>
    </BurgerMenuWrapper>
  );
}

export default BurgerMenu;
