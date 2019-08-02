import React from 'react';
import '../App.css';


import { CardDeck, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import Lawn from '../Images/lawn1.jpg'
import Lawn2 from '../Images/lawn2.jpg'
import Lawn3 from '../Images/lawn3.jpg'

function Home() {
    return(
<Container fluid>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lawn}
      alt="First slide"
    />
    <Carousel.Caption>
    <div class="h2 mb-2 bg-success text-white">PRIDE</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lawn2}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div class="h2 mb-2 bg-success text-white">QUALITY</div>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lawn3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div class="h2 mb-2 bg-success text-white">EXCELLENCE</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<CardDeck>
  <Col lg = "auto" fluid = "true" >
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Teddy R.</Card.Title>
      <Card.Text>
        "Customer Review Text Goes Here...."
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added 05/22/2019</small>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Susan G.</Card.Title>
      <Card.Text>
      "Customer Review Text Goes Here....".{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added 06/22/2019</small>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Richard M.</Card.Title>
      <Card.Text>
      "Customer Review Text Goes Here...."
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added 07/22/2019</small>
    </Card.Footer>
  </Card>
  </Col>
  

</CardDeck>
</Container>
);
}

export default Home;