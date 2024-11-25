import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

const LoginPage = () => {
  const [accessCode, setAccessCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (accessCode === '1234') {
      navigate('/main'); 
    } else {
      alert('Неверный код доступа');
    }
  };

  return (
    <div className="login-page">
      <h1>
        <svg viewBox="0 0 100 20" className="title-svg">
          <text x="10" y="15" fontSize="10" fill="blue">
            hostel duty
          </text>
        </svg>
      </h1>
      <input
        type="password"
        placeholder="Введите код доступа"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default LoginPage;
