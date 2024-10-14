import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import "../Styles/MyCards.css"; 
import clinical from "../assets/clinial psychologist.jpeg"
import counsel from "../assets/counseling psychologist.jpeg"
import psychotrist from "../assets/Psychatrist.jpeg"
import marriage from "../assets/marriage and family Therepist.jpeg"
import social from "../assets/Social worker.jpeg"

function Therapist() {
  const [showModal, setShowModal] = useState(false); 
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [therapistInfo, setTherapistInfo] = useState({}); 


  const therapists = [
    {
      title: "Clinical Psychologist",
      description: "Specializes in diagnosing and treating mental health disorders using various therapeutic techniques.",
      image: clinical, 
      qualifications: "PhD in Psychology",
      expertise: "Cognitive Behavioral Therapy, Stress Management",
      reviews: "Rated 4.8 based on 120 reviews",
      availability: "Mon-Fri: 9 AM - 5 PM",
    },
    {
      title: "Counseling Psychologist",
      description: "Provides guidance for everyday challenges and promotes mental well-being through counseling.",
      image: counsel, 
      qualifications: "MSc in Counseling Psychology",
      expertise: "Family Therapy, Conflict Resolution",
      reviews: "Rated 4.6 based on 95 reviews",
      availability: "Mon-Fri: 10 AM - 6 PM",
    },
    {
      title: "Psychiatrist",
      description: "A medical doctor trained in diagnosing and treating mental health conditions, including prescribing medications.",
      image: psychotrist, 
      qualifications: "MD in Psychiatry",
      expertise: "Medication Management, Therapy",
      reviews: "Rated 4.5 based on 80 reviews",
      availability: "Mon-Fri: 11 AM - 7 PM",
    },
    {
      title: "Marriage and Family Therapist",
      description: "Focuses on improving relationships and resolving issues within families and couples.",
      image: marriage, 
      qualifications: "MA in Marriage and Family Therapy",
      expertise: "Couples Therapy, Family Counseling",
      reviews: "Rated 4.7 based on 100 reviews",
      availability: "Mon-Fri: 9 AM - 5 PM",
    },
    {
      title: "Social Worker",
      description: "Provides therapy and support within community contexts, helping individuals and families cope with challenges.",
      image: social, 
      qualifications: "MSW in Social Work",
      expertise: "Community Support, Crisis Intervention",
      reviews: "Rated 4.4 based on 70 reviews",
      availability: "Mon-Fri: 9 AM - 4 PM",
    },
  ];

  const handleShow = (therapist) => {
    setTherapistInfo(therapist); 
    setShowModal(true); 
  };

  const handleShowDetails = (therapist) => {
    setTherapistInfo(therapist); 
    setShowDetailsModal(true); 
  };

  const handleClose = () => {
    setShowModal(false); 
    setShowDetailsModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert(`Booking request submitted for ${therapistInfo.title}`);
    handleClose(); 
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {therapists.map((therapist, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={therapist.image} alt={therapist.title} />
              <Card.Body>
                <Card.Title className="fw-bold">{therapist.title}</Card.Title>
                <Card.Text>
                  {therapist.description}
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow(therapist)}>Contact Me</Button>
                <Button variant="outline-light" onClick={() => handleShowDetails(therapist)} className="ms-2">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Call with {therapistInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group controlId="formBasicTime">
              <Form.Label>Preferred Call Time</Form.Label>
              <Form.Control as="select" required>
                <option>Choose...</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
                <option>12:00 AM</option>
                <option>1:00 AM</option>
                <option>2:00 AM</option>
                <option>3:00 AM</option>
              </Form.Control>
              <small className="text-muted">Available hours: 6 PM - 3 AM</small>
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
              <Form.Label>Price for 2-hour session</Form.Label>
              <Form.Control type="text" readOnly value="2,000 Rs" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Book Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for viewing therapist details */}
      <Modal show={showDetailsModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{therapistInfo.title} - Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Qualifications</h5>
          <p>{therapistInfo.qualifications}</p>
          <h5>Expertise</h5>
          <p>{therapistInfo.expertise}</p>
          <h5>Reviews</h5>
          <p>{therapistInfo.reviews}</p>
          <h5>Availability</h5>
          <p>{therapistInfo.availability}</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Therapist;
