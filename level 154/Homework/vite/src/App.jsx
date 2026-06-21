import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const addHistory = (newValue) => {
    setHistory((prev) => {
      const updated = [newValue, ...prev];
      return updated.slice(0, 5);
    });
  };

  const increment = () => {
    setCount((prev) => {
      const newValue = prev + 1;
      addHistory(newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newValue = prev - 1;
      addHistory(newValue);
      return newValue;
    });
  };

  const reset = () => {
    setCount(0);
    addHistory(0);
  };

  const color =
    count > 0
      ? "text-green-500"
      : count < 0
      ? "text-red-500"
      : "text-black";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">

      <h1 className={`text-6xl font-bold ${color}`}>
        {count}
      </h1>

      <div className="flex gap-3">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
        >
          Increment
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800"
        >
          Reset
        </button>

        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
        >
          Decrement
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow w-72">
        <h2 className="font-bold mb-2">History (last 5)</h2>

        {history.length === 0 ? (
          <p className="text-gray-500">No changes yet</p>
        ) : (
          history.map((item, i) => (
            <p key={i} className="text-gray-700">
              {item}
            </p>
          ))
        )}
      </div>

    </div>
  );
}