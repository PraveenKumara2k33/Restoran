import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';
import { FaUtensils } from "react-icons/fa";
const AboutSection = () => {
    const Table1 = './Images/table1.jpg';
    const Table2 = './Images/table2.jpg';
    const Table3 = './Images/table3.jpg';
    const Table4 = './Images/table4.jpg';
    return (
        <div className="container-fluid mt-5" id="About">
          <Row>
            <Col sm={6}>
              <Row>
                <Col sm={5}>
                  <img src={Table1} className="d-block w-100" alt="Table 1" style={{ height: "200px" }} />
                </Col>
                <Col sm={4}>
                  <img src={Table2} className="d-block w-100" alt="Table 2" style={{ height: "200px" }} />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-100" alt="Table 3" style={{ height: "200px" }} />
                </Col>
                <Col sm={5}>
                  <img src={Table4} className="d-block w-100" alt="Table 4" style={{ height: "200px" }} />
                </Col>
              </Row>
              <hr className="d-sm-none" />
            </Col>
            <Col sm={5}>
              <h3>About us</h3>
              <h1>
                Welcome to{' '}
                <a className="navbar-brand" href="/" id="navbar-brand">
                <FaUtensils /> Restoran
                </a>
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et
                lorem et sit, sed stet lorem sit.
                <br />
                <br />
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
                et lorem et sit. sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <h4>
                <span>15+</span> years experiences
                <br />
                <span>50</span> Master chef's
              </h4>
              <Button variant="warning" id="button">Read More</Button>
            </Col>
          </Row>
        </div>
      );
    }    

export default AboutSection