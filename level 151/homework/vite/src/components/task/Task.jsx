import { useState } from "react";

export default function Task({ name, time }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="p-4 border rounded-xl w-80">
      <h3 className="font-bold">{name}</h3>
      <p>Time: {time}</p>

      <p className={completed ? "text-green-600" : "text-yellow-600"}>
        {completed ? "Completed" : "Pending"}
      </p>

      <button
        onClick={() => setCompleted(true)}
        className="mt-2 bg-black text-white px-3 py-1 rounded-lg"
      >
        Complete
      </button>
    </div>
  );
}