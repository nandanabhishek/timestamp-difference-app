import 'bootstrap/dist/css/bootstrap.min.css';
import './TimerForm.css';

import React, { useState } from 'react';

const TimerForm = ({ onCalculate }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(startTime, endTime);
  };

  return (
    <form onSubmit={handleSubmit} className="timer-form">
      <div className="form-group">
        <label>Start Time:</label>
        <input
          type="datetime-local"
          className="form-control"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>End Time:</label>
        <input
          type="datetime-local"
          className="form-control"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Calculate</button>
    </form>
  );
  
};

export default TimerForm;
