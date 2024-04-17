import "./App.css";
import { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import LoginPage from "./component/LoginPage";
import UserPage from "./component/UserPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  // 로그인 페이지니까 기본값으로 false로
  // authnticate는 기본값을 false다
  // false로 하면 login페이지를 갔다가 간다
  // true로하면 user페이지로 갈 수 있다

  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:device/:category/:productnum"
          element={<ProductDetail />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

// routes route를 가져다 놓는거 => 분기시키다 / 나누다
// path="/" 경로
// element={<Home />} 경로 대상

// path="/product/:id" id라는 키값 / id라는
// id에 따라서 상세페이지 경로를 정하는

// id값을 찾아야한다 => 파라미터 값을 찾을 수 있는 리액트 훅 =>useParams

// <Route path="/" element={<Home />} /> => / => 메인페이지
// <Route path="/about" element={<About />} /> => /about => about페이지

// UserPage에 바로 넘어 가면 안되니까 PrivateRoute를 통해서 가게 만들었다
