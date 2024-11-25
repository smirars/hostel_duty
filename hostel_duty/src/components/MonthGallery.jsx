import React from 'react';
import './MonthGallery.css';

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

const MonthGallery = ({ selectedMonth, onMonthChange }) => {
  const handlePrev = () => {
    onMonthChange((prev) => (prev - 1 + 12) % 12);
  };

  const handleNext = () => {
    onMonthChange((prev) => (prev + 1) % 12);
  };

  return (
    <div className="month-gallery">
      <button onClick={handlePrev}>&lt;</button>
      <span>{months[selectedMonth]}</span>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default MonthGallery;

