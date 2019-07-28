import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <div className="logoStrip">
            <span className="words"><span className="greenBoy">Green</span>Books</span>
        </div>
        <div className="navBar">
            <Link to="/Orders">
            <div className="navLink">Orders</div>
            </Link>
            <Link to="/NewOrder">
            <div className="navLink">New Order</div>
            </Link>
            <Link to="/CheckOut">
            <div className="navLink">Check Out</div>
            </Link>
            <Link to ="/NewCustomer">
            <div className="navLink">New Customer</div>
            </Link>
            <Link to ="/CustProf">
            <div className="navLink">Profile</div>
            </Link>
            <a href="/logout"><div className="navLink2">Log Out</div></a>
        </div>
    </div>
  );
}

export default Header;
