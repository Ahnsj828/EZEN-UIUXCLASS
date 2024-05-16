import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        {/* <Route path="/:coinId" element={<Coin />} /> */}
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
// path="/:coinId"   =>   coin 페이지로
// path="/:coinId/*" =>  보여줄 페이지 정의하는거다
