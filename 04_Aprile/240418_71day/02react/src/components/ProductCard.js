import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  // console.log(props);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
    // id는 숫자다 / 숫자랑 문자랑 같이 못써서 => 리터럴 =>`${}`
  };

  return (
    <div className="productcard" onClick={showDetail}>
      <img src={item?.img} alt="imginfo" />
      <div>Concious Choise</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신상품" : ""}</div>
    </div>
  );
};

export default ProductCard;
// {item?.new === true ? "신상품" : ""} 삼항조건연산자
