import React from "react";
import { LeftNavBarStyle, LeftNavBarWrpperStyle } from "./LeftNavBarStyle";
import Home from "assets/img/home.png";
import Shorts from "assets/img/shorts.png";
import Subscribe from "assets/img/subscribe.png";
import Store from "assets/img/store.png";

function LeftNavBar() {
  const leftNavLink = [
    {
      page: "홈",
      img: Home,
      href: "",
    },

    {
      page: "Shorts",
      img: Shorts,
      href: "/shorts",
    },
    {
      page: "구독",
      img: Subscribe,
      href: "/subscribe",
    },
    {
      page: "보관함",
      img: Store,
      href: "/store",
    },
  ];
  return (
    <LeftNavBarWrpperStyle>
      {leftNavLink.map((leftLink) => (
        <LeftNavBarStyle key={leftLink.page} to={leftLink.href}>
          <img src={leftLink.img} alt="" />
          {leftLink.page}
        </LeftNavBarStyle>
      ))}
    </LeftNavBarWrpperStyle>
  );
}

export default LeftNavBar;
