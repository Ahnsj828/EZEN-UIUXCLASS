// 로그인이 되었는지 안되었는지에 따라 경로 이동
import React from "react";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";
// Navigate 특정경로로 이동

const PriviteRoute = ({ authenticate }) => {
  // console.log(authenticate);

  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PriviteRoute;
