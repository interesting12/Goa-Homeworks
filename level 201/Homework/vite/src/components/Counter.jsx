import { useState } from "react";
import StepInput from "./StepInput";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
      <h1 className="text-5xl font-bold mb-6">{count}</h1>

      <StepInput step={step} setStep={setStep} />

      <div className="flex gap-4 justify-center mt-6">
        <button
          onClick={() => setCount(count - step)}
          className="bg-red-500 text-white px-6 py-3 rounded-lg"
        >
          -
        </button>

        <button
          onClick={() => setCount(count + step)}
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}