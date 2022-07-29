import React, { useState } from 'react';
import Clock from './components/Clock';
import ClockClassComponent from './components/ClockClassComponent';
import Toggle from './components/Toggle';

function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(tick, 1000);

  return (
    <div className="App">
      <Clock time={time} />
      <ClockClassComponent />
      <Toggle />
    </div>
  );
}

export default App;
