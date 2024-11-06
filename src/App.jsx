import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ToDo from './components/ToDo/ToDo.jsx';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function App() {

  return (
    <>
      <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#home"> <img
              src="https://icon-library.com/images/to-do-icon/to-do-icon-16.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2 bg-light "
              alt="React Bootstrap logo"
            /> To Do App 
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <ToDo />
    </>
  )
}

export default App
