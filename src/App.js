import './App.css';
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";


function App() {
  return (
    <div className="App">
     <div style={{display: 'flex', flexDirection: 'column', border: '5px solid blue', margin: '20px',backgroundColor: 'yellow'}}>
       <div style={{borderBottom: '5px solid blue', padding : "20px"}}>
           <Timer/>
       </div>
       <div style={{padding : "20px"}}>
          <Stopwatch/>
       </div>
     </div>
    </div>
  );
}

export default App;