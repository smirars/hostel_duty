import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

const App = () => {
  const [loggedInFloor, setLoggedInFloor] = useState(null);

  return (
    <div className="app">
      {loggedInFloor === null ? (
        <LoginPage onLogin={setLoggedInFloor} />
      ) : (
        <MainPage floor={loggedInFloor} />
      )}
    </div>
  );
};

export default App;
