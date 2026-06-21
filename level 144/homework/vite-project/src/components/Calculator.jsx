import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  function calc(op) {
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid input");
      return;
    }

    if (op === "+") setResult(a + b);
    else if (op === "-") setResult(a - b);
    else if (op === "*") setResult(a * b);
    else if (op === "/") {
      if (b === 0) setResult("Cannot divide by 0");
      else setResult(a / b);
    }
  }

  function reset() {
    setNum1("");
    setNum2("");
    setResult(null);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] text-center">
        <h1 className="text-2xl font-bold mb-6">Calculator</h1>

        <input
          className="border p-2 w-full mb-3 rounded"
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-5 rounded"
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="grid grid-cols-5 gap-2 mb-5">
          <button onClick={() => calc("+")} className="bg-green-500 text-white p-2 rounded">+</button>
          <button onClick={() => calc("-")} className="bg-red-500 text-white p-2 rounded">-</button>
          <button onClick={() => calc("*")} className="bg-yellow-500 text-white p-2 rounded">*</button>
          <button onClick={() => calc("/")} className="bg-blue-500 text-white p-2 rounded">/</button>
          <button onClick={reset} className="bg-gray-900 text-white p-2 rounded">reset</button>
        </div>

        <div className="text-xl font-semibold">
          {result !== null ? result : "—"}
        </div>
      </div>
    </div>
  );
}

export default Calculator;