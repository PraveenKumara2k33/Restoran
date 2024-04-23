import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUtensils, faCartShopping, faHeadset } from '@fortawesome/free-solid-svg-icons';


const ServiceSection = () => {
    return (
        <div className="container mt-3" id="SERVICE">
            <h3 className="text-center">
                <span>--SERVICE--</span>
            </h3>
            <br />
            <Row className="gap-2">
                <Col>
                    <Card id="card">
                        <FontAwesomeIcon icon={faUserTie} id="icon" />
                        <Card.Body>
                            <Card.Title><small>Master chef's</small></Card.Title>
                            <Card.Text>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <FontAwesomeIcon icon={faUtensils} id="icon" />
                        <Card.Body>
                            <Card.Title><small>Quality Food</small></Card.Title>
                            <Card.Text>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <FontAwesomeIcon icon={faCartShopping} id="icon" />
                        <Card.Body>
                            <Card.Title><small>Online order</small></Card.Title>
                            <Card.Text>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card id="card">
                        <FontAwesomeIcon icon={faHeadset} id="icon" />
                        <Card.Body>
                            <Card.Title><small>24/7 Service</small></Card.Title>
                            <Card.Text>
                                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default ServiceSection;
