
import { Container } from 'react-bootstrap';
import "../Styles/About.css"; 
import Footer from './Footer';
const About = () => {
  return (
    <>
    <Container className="mt-4">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing high-quality services and support in mental health and wellness. Our team of experienced therapists is here to help you navigate life's challenges and improve your mental well-being.
      </p>
      <p>
        Our mission is to create a safe and supportive environment where individuals can explore their thoughts, feelings, and behaviors. We believe in the power of therapy to transform lives and are committed to helping you achieve your goals.
      </p>
      <h3>Our Team</h3>
      <p>
        Our therapists specialize in various fields, including clinical psychology, counseling, psychiatry, and family therapy. Each therapist brings unique expertise and approaches to therapy, ensuring that we meet the diverse needs of our clients.
      </p>
    </Container>
    <Footer/>
    </>
  );
};

export default About;
