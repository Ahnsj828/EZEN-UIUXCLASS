import React from "react";
import { useParams } from "react-router-dom";
// useParams Params는 파라미터 약자다

const ProductDetail = () => {
  // const params = useParams();
  // console.log(params);
  // const { id } = useParams();
  // console.log(id);
  const { device, category, productnum } = useParams();
  return (
    <div>
      <div>ProductDetail</div>
      <div>상품카테고리 : {category}</div>
      <div>매체출력 : {device}</div>
      <div>상품품번 : {productnum}</div>
    </div>
  );
};

export default ProductDetail;

// id값을 찾아야한다 => 파라미터 값을 찾을 수 있는 리액트 훅 =>useParams
// useParams Params는 파라미터 약자다
