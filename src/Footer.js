import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-secondary p-4 pe-4 footer-container">
          <Container>
            <Row>
              <Col>
                <span><i className="fa-solid fa-utensils"></i> Restoran</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, veniam.</p>
                <h5 className="mb-3 social-media">Social Media</h5>
                <div className="footer-icons ms-auto">
                  <span className="blue">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span className="pink">
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                  <span className="green">
                    <i className="fa-brands fa-whatsapp"></i>
                  </span>
                  <span className="violet">
                    <i className="fa-brands fa-linkedin"></i>
                  </span>
                </div>
              </Col>
              <Col id="contact">
                <h5 className="mb-3">Contact Us</h5>
                <p><span>Address</span> : agram street, cuddalore dt, Tamil Nadu</p>
                <p><span>Mail</span> : apk@gmail.com</p>
                <p><span>Phone</span> : +9154793892</p>
              </Col>
              <Col xs={1} className="quick-links">
                <h5 className="mb-3">Quick Links</h5>
                <div className="links">
                  <Button variant="link" style={{marginTop: '-10px'}} href="#">Home</Button>
                  <Button variant="link" href="#About">About</Button>
                  <Button variant="link" href="#MENU">Menu</Button>
                  <Button variant="link" href="#SERVICE">Services</Button>
                  <Button variant="link" href="#REVIEWS">Review</Button>
                  <Button variant="link" href="#contact">Contact</Button>
                </div>
              </Col>
              <Col>
                <h5 className="mb-3">Location</h5>
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4698268083166!2d80.17538597463339!3d13.06938321272783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261504145fe7d%3A0x58810f43c3a748ae!2sDr.%20M.G.R.%20Educational%20And%20Research%20Institute%20university!5e0!3m2!1sen!2sin!4v1692942978787!5m2!1sen!2sin"
                  width="300"
                  height="250"
                  style={{border: '0'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
export default Footer