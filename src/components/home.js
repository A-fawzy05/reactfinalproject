import React from "react";
import "./styling.css";
import { Route , Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome, [NAME]</h1>
      <p>How can I help you?</p>
      <div className="menu">
        <div className="menu-item" >Wallet💳</div>
        <Link to={"select-table"}><div className="menu-item1">Reserve Table🍴</div></Link>
        <div className="menu-item2">Tickets🎫</div>
      </div>
      <h2>Our Menu</h2>
      <div className="menu-options">
        <div className="option">KFC🍗</div>
        <div className="option1">Pizza Hut🍔</div>
        <div className="option2">Meat Two🍖</div>
      </div>
    </div>
  );
};

export default Home;
