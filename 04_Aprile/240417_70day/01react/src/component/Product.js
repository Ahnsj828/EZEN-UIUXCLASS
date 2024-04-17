import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  // console.log(query.get("q"));
  // get안에 들어간 매개변수는
  // q라는 키값에 매칭되는 value값을 찾아와라
  console.log(query.get("category"));
  return <div>Product All</div>;
};

export default Product;
