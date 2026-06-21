import { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!text.trim()) return;
    setNotes([...notes, { id: Date.now(), text }]);
    setText("");
  };

  const deleteNote = (id) =>
    setNotes(notes.filter((n) => n.id !== id));

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addNote}>Add</button>

      {notes.map((n) => (
        <div key={n.id}>
          {n.text}
          <button onClick={() => deleteNote(n.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
