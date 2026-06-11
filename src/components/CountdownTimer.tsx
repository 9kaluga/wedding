import React, { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(weddingData.date) - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      <h2>Когда сказка станет былью:</h2>
      <div className="timer-container">
        <div className="time-unit">
          <span className="number">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="label">дней</span>
        </div>
        <div className="time-unit">
          <span className="number">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="label">часов</span>
        </div>
        <div className="time-unit">
          <span className="number">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="label">минут</span>
        </div>
        <div className="time-unit">
          <span className="number">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="label">секунд</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
