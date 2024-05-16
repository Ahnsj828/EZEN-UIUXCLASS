import React, { Children } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Followers from "./Followers";
import Root from "./Root";
import NotFound from "./NotFound";
import ErrorComponent from "./ErrorComponent";

// 페이지 라이팅하는 또다른문법
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// 페이지 라이팅하는 또다른문법(최신문법) - createBrowserRouter (얘가 나와서 역할분담이 더 나뉘게 되었다 => 정리정돈)
const router = createBrowserRouter([
  {
    path: "/", // 앞에  /가 붙어서 뒤에 오는애들은 /안붙여도된다
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          // 이 Children은 User의 자식요소
          { path: "followers", element: <Followers /> },
        ],
      },
    ],
    errorElement: <NotFound />,
    // 존재하지 않는 페이지를 가고자할때 / 요청할때
  },
]);

export default router;
