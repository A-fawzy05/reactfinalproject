import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import SelectTable from "./components/selectTable.js";
import SelectDate from "./components/selectDate.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-table" element={<SelectTable />} />
          <Route path="/select-date" element={<SelectDate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
