import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Styles/Footer.css';  
import "../assets/bootstrap/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container fluid>
        <Row className="mb-4">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">About Us</h5>
            <p>
              Healthy Mind, Healthy Life is dedicated to providing resources and support for mental wellness and mindfulness.
            </p>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Subscribe to our Newsletter</h5>
            <Form inline className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="mr-2 footer-email"
                required
              />
              <Button variant="primary" className="btn-subscribe">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h5 className="footer-title">Connect with Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white mx-2"><FaFacebookF /></a>
              <a href="#" className="text-white mx-2"><FaTwitter /></a>
              <a href="#" className="text-white mx-2"><FaInstagram /></a>
              <a href="#" className="text-white mx-2"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Healthy Mind, Healthy Life. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
