import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>{isOn ? "ON" : "OFF"}</h2>

      <button onClick={() => setIsOn(true)}>ON</button>
      <button onClick={() => setIsOn(false)}>OFF</button>
      <button onClick={() => setIsOn(prev => !prev)}>TOGGLE</button>
    </div>
  );
}