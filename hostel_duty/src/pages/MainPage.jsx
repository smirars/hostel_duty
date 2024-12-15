import React, { useState } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import FloorSelector from '../components/FloorSelector';
import './MainPage.css';


const MainPage = ({ floor }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedFloor, setSelectedFloor] = useState(floor);

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
  ];

  return (
    <div className="main-page">
      <div className="header">
        <button onClick={() => setSelectedMonth((prev) => Math.max(0, prev - 1))}>
          &#8592;
        </button>
        <h2>{monthNames[selectedMonth]}</h2>
        <button onClick={() => setSelectedMonth((prev) => Math.min(11, prev + 1))}>
          &#8594;
        </button>
      </div>
      <div className="content">
        <div className="calendar-grid">
          <CalendarGrid selectedMonth={selectedMonth} selectedFloor={selectedFloor} />
        </div>
        <div className="floor-selector">
          <FloorSelector
            selectedFloor={selectedFloor}
            onSelectFloor={setSelectedFloor}
            loggedInFloor={floor}
          />
        </div>
      </div>
    </div>
  );

};

export default MainPage;

