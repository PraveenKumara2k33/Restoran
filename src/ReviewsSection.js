import React from 'react'
import { Card } from 'react-bootstrap';

const ReviewsSection = () => {
    const Image1 = './Images/1.jpg';
    const Image2 = './Images/2.jpg';
    const Image3 = './Images/3.jpg';
    return (
        <div className="container-fluid reviews-container mb-5 pb-5" id="REVIEWS">
          <div className="row mt-5 mb-5">
            <span className="menutitle d-flex justify-content-around">REVIEWS</span>
          </div>
    
          <div className="row">
            <div className="col d-flex justify-content-around">
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image1} className="review-img" id="img4" />
                <Card.Body className="card-body2">
                  <Card.Title>APK</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis fuga deleniti.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
    
            <div className="col d-flex justify-content-around border-0">
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image2} className="review-img" id="img4" />
                <Card.Body className="card-body2">
                  <Card.Title>Pk</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis fuga deleniti.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
    
            <div className="col d-flex justify-content-around">
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image3} className="review-img" id="img4" />
                <Card.Body className="card-body2">
                  <Card.Title>PaveenKumar</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis fuga deleniti.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
    
            <div className="col d-flex justify-content-around">
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image2} className="review-img" id="img4" />
                <Card.Body className="card-body2">
                  <Card.Title>Edward</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis fuga deleniti.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      );
    }
export default ReviewsSection