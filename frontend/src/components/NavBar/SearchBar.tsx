import React from "react";
import { SearchBarStyle, SearchBarWrapperStyle } from "./SearchBar.styles";
import { GoSearch } from "react-icons/go";
import { SearchBarBtnStyle } from "./SearchBarBtnStyle";
import { LogoImg } from "./LogoImg";
import mic from "assets/img/mic.png";

function SearchBar() {
  return (
    <SearchBarWrapperStyle>
      <SearchBarStyle></SearchBarStyle>
      <SearchBarBtnStyle>{<GoSearch size={20} />} </SearchBarBtnStyle>
      <LogoImg src={mic} width={45} alt="" />
    </SearchBarWrapperStyle>
  );
}

export default SearchBar;
