import React from 'react';
import './App.css';
import Header from './Components/Header';
import Orders from './Components/Orders';
import CustProf from './Components/CustProf';
import CheckOut from './Components/CheckOut';
import NewOrder from './Components/NewOrder';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br></br><br></br>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/orders" component={Orders} />
          <Route path="/CustProf" component={CustProf} />
          <Route path="/newOrder" component={NewOrder} />
          <Route path="/checkOut" component={CheckOut} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;