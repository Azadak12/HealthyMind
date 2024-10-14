import "../assets/bootstrap/css/bootstrap.min.css";
import { Container, Row, Col, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import { FaHome, FaInfoCircle, FaBalanceScale } from 'react-icons/fa'; 
import { RiAccountPinBoxFill } from "react-icons/ri";
import "../Styles/MyNavbar.css";

function MyNavbar() {
  return (
    <div className="navbar-container">
      <Container fluid> 
        <Row>
          <Col>
            <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
              <BootstrapNavbar.Brand className="fw-bold brand">HealthyMind</BootstrapNavbar.Brand>
              <BootstrapNavbar.Toggle aria-controls="my-nav" />
              <BootstrapNavbar.Collapse id="my-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={NavLink} to="/" end className="text-white">
                    <FaHome className="me-1" /> Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/About" className="text-white">
                    <FaInfoCircle className="me-1" /> About
                  </Nav.Link>
                  
                  <Nav.Link as={NavLink} to="/Selfassesment" className="text-white">
                    <FaInfoCircle className="me-1" /> Self Assessment
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/Signup" className="text-white">
                    <RiAccountPinBoxFill className="me-1" /> Sign Up
                  </Nav.Link>
                </Nav>
              </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyNavbar;
