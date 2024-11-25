import React from 'react';
import './FloorSelector.css';

const FloorSelector = ({ selectedFloor, onFloorChange }) => {
  return (
    <div className="floor-selector">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((floor) => (
        <button
          key={floor}
          className={selectedFloor === floor ? 'active' : ''}
          onClick={() => onFloorChange(floor)}
        >
          Этаж {floor}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;

