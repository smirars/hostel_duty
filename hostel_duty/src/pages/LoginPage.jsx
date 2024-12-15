import React, { useState } from 'react';
import './LoginPage.css';

const floorAccessCodes = {
  1: 'code1',
  2: 'code2',
  3: 'code3',
  4: 'code4',
  5: 'code5',
};

const LoginPage = ({ onLogin }) => {
  const [accessCode, setAccessCode] = useState('');
    
  const handleLogin = () => {
    const floor = Object.keys(floorAccessCodes).find(
      (key) => floorAccessCodes[key] === accessCode
    );
    if (floor) {
      onLogin(parseInt(floor));
    } else {
      alert('Неверный код доступа!');
    }
  };

  return (
    <div className="login-page">
      <h1>
        <svg viewBox="0 0 100 20" className="title-svg">
          <text x="10" y="15" fontSize="10" fill="blue">
            mtuci duty
          </text>
        </svg>
      </h1>
      <input
        type="password"
        placeholder="Введите код доступа"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
      />
      <button className="button__loginPage" onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default LoginPage;
