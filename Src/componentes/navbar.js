import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBarCustom() {
  const linkStyle = {textDecoration:'none', all:"unset"}
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/" style={linkStyle}>Programacion FrontEnd</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/login" style={linkStyle}>Login</Link></Nav.Link>
            <Nav.Link><Link to="/register" style={linkStyle}>Register</Link></Nav.Link>
            <Nav.Link><Link to="/dashboard" style={linkStyle}>Dashboard</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarCustom;
