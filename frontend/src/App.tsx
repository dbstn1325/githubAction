import BurgerMenu from "components/BurgerMenu/BurgerMenu";
import LeftNavBar from "components/LeftNavBar/LeftNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot, RecoilState } from "recoil";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";

import Detail from "./routes/Detail";
import Post from "./routes/List";
import GlobalFont from "./styles/GlobalFont";
import GlobalStyle from "./styles/GlobalStyles";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GlobalStyle />
        <GlobalFont />
        <Router basename="/">
          <NavBar />
          <LeftNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}
