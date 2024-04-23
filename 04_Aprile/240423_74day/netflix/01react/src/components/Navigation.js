import React from "react";
import { Link } from "react-bootstrap/lib/Navbar";
import {
  Form,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <img width={100} src="https://cromidi.cafe24.com/netflix/netflix.png" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/movies" className="nav-item">
              Home
            </Link>
            <Link to="/" className="nav-item">
              Movies
            </Link>
            <Link to="/" className="nav-item">
              TV
            </Link>
            <Link to="/" className="nav-item">
              Sports
            </Link>
            <Link to="/" className="nav-item">
              Entertainment
            </Link>
            {/* <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">TV</Nav.Link>
            <Nav.Link href="#action2">Sports</Nav.Link>
            <Nav.Link href="#action2">Entertainment</Nav.Link> */}
            {/* 메뉴 더 만들고 싶으면 추가하면된다 */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
