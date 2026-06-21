import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("Hello");

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function changeText() {
    setText("welcome");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{text}</h1>
      <button onClick={changeText}>Change Text</button>

      <hr />

      <h2>Counter: {count}</h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;