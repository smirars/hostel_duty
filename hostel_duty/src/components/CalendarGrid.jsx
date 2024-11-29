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
    if (!availableRooms[selectedFloor].includes(parseInt(room))) {
      alert('Комнаты нет на этом этаже!');
      return;
    }

    const twoWeeks = Array.from({ length: 14 }, (_, i) => selectedDay + i);
    if (twoWeeks.some((d) => dutyAssignments[`${selectedMonth}-${selectedFloor}-${d}`] === room)) {
      alert('Комната занята на ближайшие две недели!');
      return;
    }

    setDutyAssignments((prev) => ({
      ...prev,
      [dayKey]: { room, status: 'pending' },
    }));
    setModalOpen(false);
  };

  return (
    <div className="calendar-grid">
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
        const dayKey = `${selectedMonth}-${selectedFloor}-${day}`;
        const assignment = dutyAssignments[dayKey];
        return (
          <div
            key={day}
            className="calendar-day"
            onClick={() => handleDayClick(day)}
          >
            <div className="day-number">{day}</div>
            {assignment && (
              <>
                <div className="room-number">Комн. {assignment.room}</div>
                <div
                  className="status-indicator"
                  style={{
                    backgroundColor:
                      assignment.status === 'accepted'
                        ? 'green'
                        : assignment.status === 'rejected'
                        ? 'red'
                        : 'yellow',
                  }}
                />
              </>
            )}
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


