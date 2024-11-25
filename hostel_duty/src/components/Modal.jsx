import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ day, onClose, onSave }) => {
  const [room, setRoom] = useState('');

  const handleSave = () => {
    if (room) onSave(room);
  };

  return (
    <div className="modal">
      <div className="modal-content">
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
      </div>
    </div>
  );
};

export default Modal;
