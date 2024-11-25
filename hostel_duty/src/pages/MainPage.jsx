import React, { useState } from 'react';
import MonthGallery from '../components/MonthGallery';
import CalendarGrid from '../components/CalendarGrid';
import FloorSelector from '../components/FloorSelector';
import './MainPage.css';

const MainPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedFloor, setSelectedFloor] = useState(1);

  return (
    <div className="main-page">
      <MonthGallery selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
      <div className="content">
        <CalendarGrid selectedMonth={selectedMonth} selectedFloor={selectedFloor} />
        <FloorSelector selectedFloor={selectedFloor} onFloorChange={setSelectedFloor} />
      </div>
    </div>
  );
};

export default MainPage;

