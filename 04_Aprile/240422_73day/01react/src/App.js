import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// 루트컴포넌트 하나라도 있어야 자식 컴포넌트에 상속된다
import { Container, Row, Col } from "react-bootstrap";
// Container 수직수평 중앙정렬 // Row 행 // 1개의 행 10개의 열
import Contactform from "./components/Contactform";
import ContactLis from "./components/ContactLis";

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <Contactform />
          </Col>
          <Col>
            <ContactLis />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
