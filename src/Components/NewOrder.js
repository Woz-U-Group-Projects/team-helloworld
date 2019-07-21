
import React from 'react';
import '../App.css';
import Grass from '../Images/grass1.png'
import Mower from '../Images/mower1.png'
import Ultimate from '../Images/ultimate1.png'
import CTE from '../Images/mower2.png'
import Lawn from '../Images/lawn1.jpg'
import {Card, CardDeck, Container, Button, ListGroup, Jumbotron, Image} from 'react-bootstrap'

function NewOrder() {
  return(

<Container>
<Jumbotron>
<Image src={Lawn} fluid />
  <h1>Lawn Care Packages</h1>
    <p>
        Thanks for choosing GreenBooks for your lawn care needs. We are sure to have a package to fit your needs.
    </p>
    <p>
        <Button variant="secondary">Testimonials</Button>
    </p>
</Jumbotron>
    <CardDeck>
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
</CardDeck>
</Container>


  );

}
export default NewOrder;