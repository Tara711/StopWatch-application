import React, { useRef, useState } from "react";
import "./StopWatch.css";

function StopWatch() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const startTimer = () => {
    //clear the prevoius one
    clearInterval(ref.current);
    // start new timer
    ref.current = setInterval(() => {
      setCount((prevCount) => prevCount + 10);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(ref.current);
    setCount(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const miliseconds = Math.floor(time % 1000) / 10;
    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")} : ${miliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <h1>Timer : {formatTime(count)}</h1>
      <div className="stopwatch_btn">
        <button className="start" onClick={startTimer}>
          Start
        </button>
        <button className="stop" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
