import { useState } from "react";
import "./App.css";
import Clock from "./Components/Clock/Clock";
import DigitalClock from "./Components/DigitalClock/DigitalClock";
import DotClock from "./Components/DotClock/DotClock";

function App() {
  const CLOCKS = [<Clock />, <DigitalClock/>, <DotClock />];
  const [counter, setCounter] = useState(2);
  const updateCounter = () => {
    if (CLOCKS.length - 1 === counter) {
      setCounter(0);
    } else{
      setCounter(counter + 1);
    }
  };

  return (
    <div className="App">
      <div className="next-clock-button-container">
        <button
          className="next-clock-button"
          onClick={() => {
            updateCounter();
          }}
        >
          Next Clock
        </button>
      </div>
      {/* <Clock/> */}
      {CLOCKS[counter]}
    </div>
  );
}

export default App;
