
import React from 'react';
import '../App.css';
import Grass from '../Images/grass1.png'
import Mower from '../Images/mower1.png'
import Ultimate from '../Images/ultimate1.png'
import CTE from '../Images/mower2.png'
import Lawn from '../Images/lawn4.jpg'
import {Card, CardDeck, Container, Button, ListGroup, Jumbotron, Image, Row, Col, Form} from 'react-bootstrap'

function NewOrder() {
  return(

<Container fluid>
<Jumbotron>
<Image src={Lawn} fluid rounded />
    <br></br><br></br><br></br>
  <h1>Lawn Care Packages</h1>
    <p>
        Thanks for choosing GreenBooks for your lawn care needs. We are sure to have a package to fit your needs.
    </p>
    
</Jumbotron>

<CardDeck>
    <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src={Grass} />
    <Card.Body>
      <Card.Title>Yard Package 1</Card.Title>
      <Card.Text>
        <ListGroup>
            <ListGroup.Item>Mow</ListGroup.Item>
            <ListGroup.Item><s>Trim</s></ListGroup.Item>
            <ListGroup.Item><s>Edge</s></ListGroup.Item>
            <ListGroup.Item><s>De-Weed</s></ListGroup.Item>
            <ListGroup.Item><s>Fertilize</s></ListGroup.Item>
        </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <h3>$39.99</h3>
            <Button variant="secondary" size="lg" block type="submit">
                Choose Package
            </Button>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src={Mower} />
    <Card.Body>
      <Card.Title>Yard Package 2</Card.Title>
      <Card.Text>
        <ListGroup>
            <ListGroup.Item>Mow</ListGroup.Item>
            <ListGroup.Item>Trim</ListGroup.Item>
            <ListGroup.Item><s>Edge</s></ListGroup.Item>
            <ListGroup.Item><s>De-Weed</s></ListGroup.Item>
            <ListGroup.Item><s>Fertilize</s></ListGroup.Item>
        </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <h3>$49.99</h3>
        <Button variant="secondary" size="lg" block type="submit">
          Choose Package
        </Button>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src={CTE} />
    <Card.Body>
      <Card.Title>Yard Package 3</Card.Title>
      <Card.Text>
        <ListGroup>
            <ListGroup.Item>Mow</ListGroup.Item>
            <ListGroup.Item>Trim</ListGroup.Item>
            <ListGroup.Item>Edge</ListGroup.Item>
            <ListGroup.Item><s>De-Weed</s></ListGroup.Item>
            <ListGroup.Item><s>Fertilize</s></ListGroup.Item>
        </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <h3>$69.99</h3>
        <Button variant="secondary" size="lg" block type="submit">
          Choose Package
        </Button>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src={Ultimate} />
    <Card.Body>
      <Card.Title>Yard Package 4</Card.Title>
      <Card.Text>
        <ListGroup>
            <ListGroup.Item>Mow</ListGroup.Item>
            <ListGroup.Item>Trim</ListGroup.Item>
            <ListGroup.Item>Edge</ListGroup.Item>
            <ListGroup.Item>De-Weed</ListGroup.Item>
            <ListGroup.Item>Fertilize</ListGroup.Item>
        </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <h3>$89.99</h3>
        <Button variant="secondary" size="lg" block type="submit">
          Choose Package
        </Button>
    </Card.Footer>
  </Card>
  </Col>

  <Col lg = "auto" fluid = "true">
  <Card>
    <Card.Img variant="top" src={Ultimate} />
    <Card.Body>
      <Card.Title>Yard Package 5</Card.Title>
      <Card.Text>
        <ListGroup>
            <ListGroup.Item>Mow</ListGroup.Item>
            <ListGroup.Item>Trim</ListGroup.Item>
            <ListGroup.Item>Edge</ListGroup.Item>
            <ListGroup.Item>De-Weed</ListGroup.Item>
            <ListGroup.Item>Fertilize</ListGroup.Item>
        </ListGroup>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <h3>$89.99</h3>
        <Button variant="secondary" size="lg" block type="submit">
          Choose Package
        </Button>
    </Card.Footer>
  </Card>
  </Col>

</CardDeck>
<br></br>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Container>


  );

}
export default NewOrder;