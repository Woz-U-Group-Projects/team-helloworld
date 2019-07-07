import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
//import Orders from './Components/Orders';
import NewOrder from './Components/NewOrder';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br><br></br>
      <NewOrder />
      
    </div>
  );
}

export default App;