import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const MenuSection = () => {
    const Table3 = './Images/table3.jpg';
    return (
        <Container className="mt-3" id="MENU">
          <h3 className="text-center">
            <span><u>--Food Menu--</u></span>
          </h3>
          <h1 className="text-center">Most Popular Items</h1>
          <br />
          <Row>
            <Col sm={6}>
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4}>
                  <img src={Table3} className="d-block w-50" alt="" />
                  <div className="col-sm-8">
                    <h4 className="card-top">Chicken Briyani $115</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }

export default MenuSection