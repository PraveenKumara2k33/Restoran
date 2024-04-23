import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
          <Navbar.Brand href="#" id="navbar-brand">
            <i className="fas fa-utensils"></i> Restoran
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="#">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#About">ABOUT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#SERVICE">SERVICE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#MENU">MENU</Nav.Link>
              </Nav.Item>
              <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#Booking">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#REVIEWS">REVIEWS</NavDropdown.Item>
                <NavDropdown.Item href="#">Testimonial</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav.Item>
            </Nav>
            <button className="btn btn-warning text-white" type="button">
              BOOK A TABLE
            </button>
          </Navbar.Collapse>
        </Navbar>
      );
    }
export default NavBar