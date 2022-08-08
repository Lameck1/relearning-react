// import React, { useState } from 'react';
// import { number } from 'prop-types';
import ClassContextComponent from './components/ClassContextComponent';
import Counter from './components/Counter';
// import Clock from './components/Clock';
import FunctionContextComponent from './components/FunctionContextComponent';
import NameForm from './components/NameForm';
import { ThemeProvider } from './components/ThemeContext';
import Todo from './components/ToDo';

function App() {

  // const [time, setTime] = useState(() => new Date().toLocaleTimeString());



  // const tick = () => {
  //   setTime(new Date().toLocaleTimeString());
  // };

  // setInterval(tick, 1000);

  return (
    <div className="App">
      {/* <Clock time={time} /> */}
      <NameForm />

      <ThemeProvider>
        <FunctionContextComponent />
        <ClassContextComponent />
        <Counter />
        <Todo />
      </ThemeProvider>
    </div>
  );
}

export default App;
