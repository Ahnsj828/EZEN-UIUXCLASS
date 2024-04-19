// 전상품이 보여지는 페이지
import React, { useEffect, useState } from "react";
// 화면에 뭘 보여줘야한다 => useState
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState();
  const getProducts = async () => {
    const url = "http://localhost:3004/products/";
    // 외부 데이터(json)를 가져와서 보여주려한다
    // const response = fetch(url);
    // fetch 비동기처리한다
    const response = await fetch(url);
    // 순서를 지키면서 동기화 처리하려면 => async , await
    const data = await response.json();
    // json은 외계어라 변환해줘야한다

    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {/* <Col lg={3}>
           12를 4으로 나눌거다 =>하나의 12중에 3을 써라 
          <ProductCard />
        </Col>
        <Col lg={3}>
          <ProductCard />
        </Col>
        <Col lg={3}>
          <ProductCard />
        </Col>
        <Col lg={3}>
          <ProductCard />
        </Col> */}
        {/* 👇🏼 */}

        {productList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
