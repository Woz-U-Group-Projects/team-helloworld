import React from 'react';
import '../App.css';
//import {Link} from "react-router";

function Header() {
  return (
    <div className="header">
        <div className="logoStrip">
            <span className="words"><span className="greenBoy">Green</span>Books</span>
        </div>
        <div className="navBar">
            <a href="/orders"><div className="navLink">Orders</div></a>
            <a href="/NewOrder"><div className="navLink">New Order</div></a>
            <a href="/new-customer"><div className="navLink">New Customer</div></a>
            <a href="/logout"><div className="navLink2">Log Out</div></a>
        </div>
    </div>
  );
}

export default Header;
