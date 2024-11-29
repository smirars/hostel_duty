import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ day, type, assignment, onClose, onSave, onUpdate }) => {
  const [room, setRoom] = useState('');

  const handleSave = () => {
    if (room) onSave(room);
  };

  const handleAccept = () => onUpdate('accepted');
  const handleReject = () => onUpdate('rejected');

  return (
    <div className="modal">
      <div className="modal-content">
        {type === 'assign' ? (
          <>
            <h2>Назначить дежурного</h2>
            <p>День: {day}</p>
            <input
              type="number"
              placeholder="Введите номер комнаты"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>Сохранить</button>
              <button onClick={onClose}>Закрыть</button>
            </div>
          </>
        ) : (
          <>
            <h2>Принять дежурство</h2>
            <p>День: {day}</p>
            <p>Назначенная комната: {assignment.room}</p>
            <div className="modal-buttons">
              <button onClick={handleAccept}>Принять</button>
              <button onClick={handleReject}>Отклонить</button>
              <button onClick={onClose}>Закрыть</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

