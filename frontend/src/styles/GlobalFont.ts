import { createGlobalStyle } from "styled-components";
// 각 폰트 파일 import
import Font_L from "../assets/fonts/Font-Light.woff";
import Font_R from "../assets/fonts/Font-Medium.woff";
import Font_B from "../assets/fonts/Font-Bold.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "YouTubeSansLight";
        src: local("YouTubeSansLight"), url(${Font_L}) format('woff'); 
        font-weight: lighter;
        font-style: normal;
        
    }
    @font-face {
        font-family: "YouTubeSansDarkRegular";
        src: local("YouTubeSansDarkRegular"), url(${Font_R}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "YouTubeSansBold";
        src: local("YouTubeSansBold"), url(${Font_B}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
`;
