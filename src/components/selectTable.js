import React from "react";
import "./styling.css";
import { Link } from "react-router-dom";

const SelectTable = () => {
  const tables = [
    { name: "Table beside window", address: "123 Street, City" },
    { name: "Table close to cashier", address: "456 Street, City" },
    { name: "Table in the middle", address: "789 Street, City" },
  ];

  return (
    <div className="select-table">
      <h2>Select a Table</h2>
      <ul>
        <Link to ="/select-date">{tables.map((table, index) => (
          <button key={index}>
            <h3>{table.name}</h3>
            <p>{table.address}</p>
          </button>
        ))}</Link>
      </ul>
    </div>
  );
};

export default SelectTable;
