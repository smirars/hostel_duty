import React, { useState } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import FloorSelector from '../components/FloorSelector';
import './MainPage.css';

const MainPage = ({ floor }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedFloor, setSelectedFloor] = useState(floor);

  return (
    <div className="main-page">
      <div className="header">
        <button onClick={() => setSelectedMonth((prev) => Math.max(0, prev - 1))}>
          &#8592;
        </button>
        <h2>Месяц {selectedMonth + 1}</h2>
        <button onClick={() => setSelectedMonth((prev) => Math.min(11, prev + 1))}>
          &#8594;
        </button>
      </div>
      <CalendarGrid selectedMonth={selectedMonth} selectedFloor={selectedFloor} />
      <FloorSelector
        selectedFloor={selectedFloor}
        onSelectFloor={setSelectedFloor}
        loggedInFloor={floor}
      />
    </div>
  );

};

export default MainPage;

