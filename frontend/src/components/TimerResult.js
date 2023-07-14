import './TimerResult.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const TimerResult = ({ differenceInSeconds }) => {
    return (
        <div className="timer-result">
          {differenceInSeconds !== null && (
            <p className="result-message">
              The difference in seconds is: {differenceInSeconds}
            </p>
          )}
        </div>
    );      
};

export default TimerResult;
