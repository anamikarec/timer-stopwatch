import React, { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [state, setState] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    return pauseTimer;
  }, []);

  const startTimer = () => {
    if (timerRef.current === null)
      timerRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };

  return (
    <div className="App">
      <h2>Stop Watch</h2>
      <h3>{state}</h3>
      <button style={{backgroundColor:"green",color:"white",borderBottom:"1px solid blue",padding:"5px",borderRadius:"5px"}} onClick={startTimer}>START</button>
      <button style={{backgroundColor:"green",color:"white",borderBottom:"1px solid blue",padding:"5px",borderRadius:"5px"}} onClick={pauseTimer}>PAUSE</button>
      <button style={{backgroundColor:"green",color:"white",borderBottom:"1px solid blue",padding:"5px",borderRadius:"5px"}} onClick={resetTimer}>RESET</button>
    </div>
  );
}