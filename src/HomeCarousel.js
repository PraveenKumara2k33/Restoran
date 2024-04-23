import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCarousel = () => {
    const Briyani="./Images/Briyani.jpg";
    const KebabBarbecues= './Images/kebab barbecues.jpg';
    const BakedPizza= './Images/baked pizza.jpg';
    return (
        <Carousel id="demo" className="slide" fade={true} pause={false} interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={Briyani} alt="First slide" style={{ height: "400px" }} />
            <Carousel.Caption className="text-center">
              <h2>Enjoy Our Delicious Meal</h2>
              <br />
              <p>Restoran is a restaurant, bar and coffee roastery located in Italy. We have awesome recipes and the most talented chefs in town!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={KebabBarbecues} alt="Second slide" style={{ height: "400px" }} />
            <Carousel.Caption className="text-center">
              <h2>The Best Tasting Experience</h2>
              <br />
              <p>Restoran is a restaurant, bar and coffee roastery located in Italy. We have awesome recipes and the most talented chefs in town!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={BakedPizza} alt="Third slide" style={{ height: "400px" }} />
            <Carousel.Caption className="text-center">
              <h2>WELCOME TO RESTRON</h2>
              <br />
              <p>Come for the food. Stay for the company</p>
              <br />
              <Container className="text-center">
                <button className="btn btn-warning text-white" type="button">BOOK A TABLE</button>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HomeCarousel