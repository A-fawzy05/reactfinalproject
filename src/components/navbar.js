import React from "react";
import { Link } from "react-router-dom";
import "./styling.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="linkss"to="/">Home 🏠︎ </Link>
      <Link to="/vouchers">Voucher</Link>
      <Link to="/select-table">P-coin</Link>
      <Link to="/account">Account👤</Link>
    </nav>
  );
};

export default Navbar;
