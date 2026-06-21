import { useState } from "react";

export default function InputList() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          if (!value.trim()) return;
          setList([...list, value]);
          setValue("");
        }}
      >
        Add
      </button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
