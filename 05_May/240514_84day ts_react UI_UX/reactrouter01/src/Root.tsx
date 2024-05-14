import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import Home from "./Home";
// import About from "./About";
// import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  // return (
  //   <div>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //     </Routes>
  //   </div>
  // );
  // return <Router />;
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default App;
