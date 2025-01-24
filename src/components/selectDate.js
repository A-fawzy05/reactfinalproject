import React, { useState } from "react";
import "./styling.css";

const SelectDate = () => {
  const [selectedDay, setSelectedDay] = useState("26");
  const [selectedTime, setSelectedTime] = useState("11:00");
  const [selectedChairs, setSelectedChairs] = useState(4);

  return (
    <div className="select-date">
      <h2>Select Date</h2>
      <div className="date-selector">
        {[26, 27, 28, 29].map((day) => (
          <button
            key={day}
            className={selectedDay === day ? "active" : ""}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <h2>Select Time</h2>
      <div className="time-selector">
        {["11:00", "11:30", "12:00"].map((time) => (
          <button
            key={time}
            className={selectedTime === time ? "active" : ""}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <h2>Select Chairs</h2>
      <input
        type="number"
        value={selectedChairs}
        onChange={(e) => setSelectedChairs(e.target.value)}
        min="1"
        max="8"
      />
    </div>
  );
};

export default SelectDate;
