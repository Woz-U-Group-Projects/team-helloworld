import React from 'react';
import './App.css';
import Header from './Components/Header';
import Orders from './Components/Orders';
import CheckOut from './Components/CheckOut';
import NewOrder from './Components/NewOrder';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Carousel, Card } from 'react-bootstrap';
import Lawn from './Images/lawn1.jpg'
import Lawn2 from './Images/lawn2.jpg'
import Lawn3 from './Images/lawn3.jpg'
import CustProf from './Components/CustProf';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br></br><br></br>
        <Switch>
        <Route path="/" exact component={Home} />    
        <Route path="/orders" component={Orders} />
        <Route path="/newOrder" component={NewOrder} />
        <Route path="/checkOut" component={CheckOut} />
        <Route path="/custProf" component={CustProf} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lawn}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>PRIDE</h3>
      <p>Come home to a yard you can be proud of!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lawn2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>QUALITY</h3>
      <p>Quality comes first at GreenBooks!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Lawn3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>EXCELLENCE</h3>
      <p>In the persuit of an excelent yard? We got you covered!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
);

export default App;