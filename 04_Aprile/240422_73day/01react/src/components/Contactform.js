import React, { useState } from "react";
// useState 상태값이 변화가 될때 / 어디 담겨야할 때 사용
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Contactform = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };
  const getNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();
    // 서버로 가지 못하게 막는거
    dispatch({
      // action객체가 담길거다 / action객체는 type / payload가 필요하다
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };

  return (
    <Form onSubmit={addContact}>
      {/* '추가'버튼이 눌리면 addContact함수가 실행되게해라 */}
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={getName}
        />
        {/* onChange={getName} 어떠한 값이 변경이 되었다 */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="전화번호를 입력해주세요"
          onChange={getNumber}
        />
        {/* type="number" password는 *** 이렇게 나온다 */}
        {/* onChange={getNumber} 어떠한 값이 변경이 되었다 */}
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default Contactform;
