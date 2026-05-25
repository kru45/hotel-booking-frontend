import React, { useState } from 'react';
import RoomList from './components/RoomList';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const showNotification = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>StayEase: Hotel Booking</h1>
        <p>Find and book luxury rooms at affordable prices.</p>
      </header>

      {message && (
        <div className="notification">
          {message}
        </div>
      )}

      <main>
        <RoomList showNotification={showNotification} />
      </main>
    </div>
  );
}

export default App;