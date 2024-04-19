import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// 부트스트랩 css로 안해주면 안먹힐 때가 있어서 이걸 붙여넣어야한다
import Navbar from "./components/Navbar";
import ProductAll from "./components/ProductAll";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import PriviteRoute from "./components/PriviteRoute";
import { Routes, Route } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      {/* 어느 페이지를 가던 상단에 공통으로 들어갈 네비게이션 영역 */}
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PriviteRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}
// 로그인과 관련된 페이지들만 줬다  authenticate={authenticate} setAuthenticate={setAuthenticate}

export default App;
// path="/product/:id" => id나 숫자가 붙는다면 그 아이디에 매칭되는 상세페이지로 뿅하고 갈거야
