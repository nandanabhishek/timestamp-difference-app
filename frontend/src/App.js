import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import TimerForm from './components/TimerForm';
import TimerResult from './components/TimerResult';

const App = () => {
  const [differenceInSeconds, setDifferenceInSeconds] = useState(null);

  const calculateDifference = (startTime, endTime) => {
    axios
    .get('/api/time-difference', {
        params: { startTime, endTime },
      })
      .then((response) => {
        setDifferenceInSeconds(response.data.differenceInSeconds);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="app-header">
        <h1 className="app-title">Time Difference Calculator</h1>
      </div>
      <TimerForm onCalculate={calculateDifference} />
      <TimerResult differenceInSeconds={differenceInSeconds} />
    </div>
  );
};

export default App;
