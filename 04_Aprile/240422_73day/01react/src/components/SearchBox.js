import React, { useState } from "react";
// 값을 찾을 공간 useState
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setkeyword] = useState();
  const dispatch = useDispatch();
  const changekeyword = (e) => {
    setkeyword(e.target.value);
  };
  const searchbyName = (e) => {
    e.preventDefault();
    // form은 sever의 충신이다 / 어떻게 해서든 server한테 값을 보낸다 /  그걸막으려고
    dispatch({
      type: "SEARCH_BY_USERNAME",
      payload: { keyword },
    });
  };

  return (
    <Form onSubmit={searchbyName}>
      {/* 버튼이 눌리면 searchbyName함수가 실행되게하라 */}
      <Row>
        <Col lg={10}>
          {/* 12중에 10 */}
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={changekeyword}
            // input 태그 안에 어떠한 값이 들어오면 changekeyword함수가 작동되게하라
          />
        </Col>
        <Col lg={2}>
          {/* 12중에 2(12-10) */}
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
