import React, { useState } from 'react';
import Modal from './Modal';
import './CalendarGrid.css';

const CalendarGrid = ({ selectedMonth, selectedFloor }) => {
  const daysInMonth = new Date(2024, selectedMonth + 1, 0).getDate();
  const [dutyAssignments, setDutyAssignments] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setModalOpen(true);
  };

  const assignRoom = (room) => {
    const dayKey = `${selectedMonth}-${selectedFloor}-${selectedDay}`;
    if (Object.values(dutyAssignments).includes(room)) {
      alert('Комната уже назначена на другой день!');
      return;
    }
    setDutyAssignments((prev) => ({
      ...prev,
      [dayKey]: room,
    }));
    setModalOpen(false);
  };

  return (
    <div className="calendar-grid">
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
        const dayKey = `${selectedMonth}-${selectedFloor}-${day}`;
        return (
          <div
            key={day}
            className="calendar-day"
            onClick={() => !dutyAssignments[dayKey] && handleDayClick(day)}
          >
            <div className="day-number">{day}</div>
            <div className="room-number">
              {dutyAssignments[dayKey] ? `Комн. ${dutyAssignments[dayKey]}` : ''}
            </div>
          </div>
        );
      })}
      {modalOpen && (
        <Modal
          day={selectedDay}
          onClose={() => setModalOpen(false)}
          onSave={assignRoom}
        />
      )}
    </div>
  );
};

export default CalendarGrid;

