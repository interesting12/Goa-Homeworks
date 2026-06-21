import React, { useRef, useState, useEffect } from 'react';

function App() {
  // task1
  const box2Ref = useRef(null);

  const scrollToBox2 = () => {
    box2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // task 3
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => setTime((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, [isRunning]);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      
      <div
        onClick={scrollToBox2}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'green',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          margin: '50px auto',
        }}
      >
        Box 1
      </div>

      <div>
        <h2>Timer: {time} sec</h2>
        <button>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <div
        ref={box2Ref}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'tomato',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1500px  100px',
        }}
      >
        Box 2
      </div>
    </div>
  );
}

export default App;
