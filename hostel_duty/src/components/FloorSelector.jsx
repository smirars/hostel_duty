import React from 'react';
import './FloorSelector.css';

const FloorSelector = ({ selectedFloor, onSelectFloor, loggedInFloor }) => {
  return (
    <div className="floor-selector">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((floor) => (
        <button
          key={floor}
          onClick={() => onSelectFloor(floor)}
          disabled={loggedInFloor !== floor}
          className={loggedInFloor === floor ? 'accessible' : 'disabled'}
        >
          Этаж {floor}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;

