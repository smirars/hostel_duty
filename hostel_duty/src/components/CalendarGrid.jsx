import React, { useState } from 'react';
import Modal from './Modal';
import './CalendarGrid.css';

const availableRooms = {
  1: Array.from({ length: 14 }, (_, i) => i + 101),
  2: Array.from({ length: 14 }, (_, i) => i + 201),
  3: Array.from({ length: 14 }, (_, i) => i + 301),
  4: Array.from({ length: 14 }, (_, i) => i + 401),
  5: Array.from({ length: 14 }, (_, i) => i + 501),
};

const CalendarGrid = ({ selectedMonth, selectedFloor }) => {
  const daysInMonth = new Date(2024, selectedMonth + 1, 0).getDate();
  const [dutyAssignments, setDutyAssignments] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalType, setModalType] = useState('assign'); // 'assign' или 'accept'

  const handleDayClick = (day) => {
    setSelectedDay(day);
    const dayKey = `${selectedMonth}-${selectedFloor}-${day}`;
    setModalType(dutyAssignments[dayKey] ? 'accept' : 'assign');
    setModalOpen(true);
  };

  const assignRoom = (room) => {
    const dayKey = `${selectedMonth}-${selectedFloor}-${selectedDay}`;

    if (!availableRooms[selectedFloor].includes(parseInt(room))) {
      alert('Комнаты нет на этом этаже!');
      return;
    }

    const twoWeeksRange = Array.from({ length: 14 }, (_, i) => selectedDay + i).filter(
      (d) => d <= daysInMonth
    );

    const isRoomOccupied = twoWeeksRange.some((d) => {
      const key = `${selectedMonth}-${selectedFloor}-${d}`;
      return dutyAssignments[key]?.room === room;
    });

    if (isRoomOccupied) {
      alert('Комната занята на ближайшие две недели!');
      return;
    }

    setDutyAssignments((prev) => ({
      ...prev,
      [dayKey]: { room, status: 'pending' },
    }));
    setModalOpen(false);
  };

  const updateDutyStatus = (status) => {
    const dayKey = `${selectedMonth}-${selectedFloor}-${selectedDay}`;
    setDutyAssignments((prev) => ({
      ...prev,
      [dayKey]: { ...prev[dayKey], status },
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
          type={modalType}
          assignment={dutyAssignments[`${selectedMonth}-${selectedFloor}-${selectedDay}`]}
          onClose={() => setModalOpen(false)}
          onSave={assignRoom}
          onUpdate={updateDutyStatus}
        />
      )}
    </div>
  );
};

export default CalendarGrid;




