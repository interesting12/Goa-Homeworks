import { useState } from "react";

export default function ScoreGame() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Score: {score}</h1>

      <button onClick={() => setScore(score + 1)}>+1</button>
      <button onClick={() => setScore(score + 5)}>+5</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}