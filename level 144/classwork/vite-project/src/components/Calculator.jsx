import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(a / b);
        }
        break;
      case "reset":
        setNum1("");
        setNum2("");
        setResult(null);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">React Calculator</h1>
      <div className="flex flex-col gap-4 mb-6">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="border rounded-xl p-2 text-lg"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="border rounded-xl p-2 text-lg"
        />
      </div>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {['+', '-', '*', '/', 'reset'].map((op) => (
          <button
            key={op}
            onClick={() => handleOperation(op)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md transition"
          >
            {op === 'reset' ? 'Reset' : op}
          </button>
        ))}
      </div>
      <div className="text-xl font-medium text-gray-800">
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
  );
} 