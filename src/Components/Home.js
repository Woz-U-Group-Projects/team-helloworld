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
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  

</CardDeck>
</Container>
);
}

export default Home;