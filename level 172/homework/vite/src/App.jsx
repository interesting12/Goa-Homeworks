import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const [radio, setRadio] = useState("option1");

  const [checkboxes, setCheckboxes] = useState({
    a: false,
    b: false,
    c: false,
  });

  const [select, setSelect] = useState("one");

  const handleCheckbox = (key) => {
    setCheckboxes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">

      <div className="bg-white p-6 rounded-xl shadow-lg w-96 space-y-6">

        <h1 className="text-2xl font-bold text-center">
          React Form
        </h1>

        {/* TEXT INPUT */}
        <div>
          <label className="block font-semibold mb-1">Text</label>
          <input
            className="w-full border p-2 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
          />
        </div>

        {/* RADIO */}
        <div>
          <p className="font-semibold mb-1">Radio</p>

          <label className="block">
            <input
              type="radio"
              name="r"
              value="option1"
              checked={radio === "option1"}
              onChange={(e) => setRadio(e.target.value)}
            />{" "}
            Option 1
          </label>

          <label className="block">
            <input
              type="radio"
              name="r"
              value="option2"
              checked={radio === "option2"}
              onChange={(e) => setRadio(e.target.value)}
            />{" "}
            Option 2
          </label>

          <label className="block">
            <input
              type="radio"
              name="r"
              value="option3"
              checked={radio === "option3"}
              onChange={(e) => setRadio(e.target.value)}
            />{" "}
            Option 3
          </label>
        </div>

        {/* CHECKBOXES */}
        <div>
          <p className="font-semibold mb-1">Checkboxes</p>

          <label className="block">
            <input
              type="checkbox"
              checked={checkboxes.a}
              onChange={() => handleCheckbox("a")}
            />{" "}
            A
          </label>

          <label className="block">
            <input
              type="checkbox"
              checked={checkboxes.b}
              onChange={() => handleCheckbox("b")}
            />{" "}
            B
          </label>

          <label className="block">
            <input
              type="checkbox"
              checked={checkboxes.c}
              onChange={() => handleCheckbox("c")}
            />{" "}
            C
          </label>
        </div>

        {/* SELECT */}
        <div>
          <label className="block font-semibold mb-1">Select</label>

          <select
            className="w-full border p-2 rounded"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow w-96">
        <h2 className="font-bold mb-2">Output</h2>

        <p><b>Text:</b> {text}</p>
        <p><b>Radio:</b> {radio}</p>
        <p>
          <b>Checkboxes:</b>{" "}
          {Object.keys(checkboxes)
            .filter((k) => checkboxes[k])
            .join(", ") || "None"}
        </p>
        <p><b>Select:</b> {select}</p>
      </div>

    </div>
  );
}