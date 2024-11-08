import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDo from "./components/ToDo/ToDo.jsx";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container className="col-12">
          <Navbar.Brand href="/">
            {" "}
            <img
              src="https://icon-library.com/images/to-do-icon/to-do-icon-16.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2 bg-light "
              alt="React Bootstrap logo"
            />{" "}
            To Do App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="col-10">
            <Nav className="me-auto col-12">
              <Nav.Link href="/">Personal</Nav.Link>
              <Nav.Link href="/professional">Professional</Nav.Link>
              <Nav.Link href="/other">Other</Nav.Link>
              <div className="d-flex justify-content-end col-10" >
              <Nav.Item className="ms-auto">
                <Button variant="success" disabled>Login</Button>
              </Nav.Item>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToDo/>
    </>
  );
}

export default App;
