import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, done: false },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;

    dispatch({ type: "ADD", payload: text });
    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo..."
        />

        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="w-80 space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <span
              className={
                todo.done
                  ? "line-through text-gray-400"
                  : "text-black"
              }
            >
              {todo.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: todo.id })
                }
                className="text-green-600"
              >
                ✔
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "REMOVE", payload: todo.id })
                }
                className="text-red-600"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}