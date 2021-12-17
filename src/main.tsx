import React from "react";
import ReactDOM from "react-dom";
import "josa-complete";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { globalCss } from "#/stitches.config";
import {
  AuthBrancher,
  BiddingMain,
  EnterBiddingProductInfo,
  Login,
  ProductDescription,
  ProductPage,
  ProductRegisterSuccess,
  Register,
  SelectBiddingType,
} from "./page";
import { useModal } from "./component";

globalCss({
  "@import": ["/src/asset/font/nexon.css"],
  ":root": {
    fontSize: "8px",
  },
  body: {
    fontSize: "3rem",
    fontFamily: "NEXON Lv1 Gothic OTF",
    margin: "0px",
    overflow: "hidden",
  },
  button: {
    fontFamily: "NEXON Lv1 Gothic OTF",
  },
  input: {
    fontFamily: "NEXON Lv1 Gothic OTF",
  },
  ul: {
    paddingLeft: "3rem",
    margin: 0,
  },
})();

const AnimatedRouter = () => {
  const location = useLocation();
  const { element } = useModal();

  return (
    <TransitionGroup component={null}>
      {element}
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes location={location}>
          <Route path="/login" element={<Login />} />
          <Route path="/bidding" element={<BiddingMain />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/type" element={<SelectBiddingType />} />
          <Route path="/register/info" element={<EnterBiddingProductInfo />} />
          <Route
            path="/register/description"
            element={<ProductDescription />}
          />
          <Route
            path="/register/success"
            element={<ProductRegisterSuccess />}
          />
          <Route path="/" element={<AuthBrancher />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter>
        <AnimatedRouter />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
