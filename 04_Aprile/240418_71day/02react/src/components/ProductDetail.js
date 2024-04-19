// 상품 상세 페이지
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// id값 가져오려한다 => 파라미터값 =>useParams
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const ProductDetail = () => {
  // const [] = useState({})  빈객체
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  // 데이터를 끌어왔는지에 대한여부

  // const params = useParams();
  // console.log(params)
  const { id } = useParams();
  // console.log(id);

  const getProductDetail = async () => {
    const url = `http://localhost:3000/products/${id}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setLoading(false);
    // console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product == null) {
    return <h1>Data loading...</h1>;
  } else {
    return (
      <Container>
        <Row>
          <Col className="product-detail-img">
            <img src={product?.img} alt="imgInfo" />
          </Col>
          <Col>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">{product?.price}</div>
            <div className="choice">
              {product?.choice ? "Conscious Point" : ""}
              {/* 포인트 적립 상품이냐 아니냐 */}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              상품 구매하기
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ProductDetail;

// 파라미터로 값을 가져올 수 있다
