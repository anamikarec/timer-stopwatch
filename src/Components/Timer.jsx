import React, { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [state, setState] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    return pauseTimer;
  }, []);

  const startTimer = () => {
    if (timerRef.current === null)
       (timerRef.current = setInterval(() => {
        setState((prev) => {
            if(prev-1 === 0){
                pauseTimer();
                setState(0);
            }
            return prev - 1;
        });
      }, 1000));
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    // timerRef.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };

  const handleChange=(e)=>{
      setState(e.target.value);
  }

  return (
    <div className="App">
      <h2>Timer</h2>
      <input type="number" placeholder="00h 00m 00s" onChange={handleChange} value={state} style={{border: '1px solid white', borderBottom:"1px solid blue" ,focused: false,color:"blue"}}/>
      <br /><br /><button style={{backgroundColor:"green",color:"white",borderBottom:"1px solid blue",padding:"5px",borderRadius:"5px"}} onClick={startTimer}>START</button>{"  "}
      <button style={{backgroundColor:"green",color:"white",borderBottom:"1px solid blue",padding:"5px",borderRadius:"5px"}} onClick={resetTimer}>RESET</button>
    </div>
  );
}