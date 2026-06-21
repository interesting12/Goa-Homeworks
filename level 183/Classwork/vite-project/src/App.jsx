import React, {useState} from "react"

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+ Up</button>
      <button onClick={() => setCount(count - 1)}>- Down</button>
      <button onClick={() => setCount(0)}>Reset</button>


    </>
  )
}

export default App
