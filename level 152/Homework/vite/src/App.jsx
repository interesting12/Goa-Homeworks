import { useState } from "react";

export default function App() {
  const staticItems = ["Apple", "Banana", "Orange", "Mango"];

  const boxes = Array.from({ length: 10 }).map(() => ({
    number: Math.floor(Math.random() * 100),
    color: `hsl(${Math.random() * 360}, 70%, 50%)`,
  }));

  const [text, setText] = useState("");

  const boolArray = Array.from({ length: 100 }).map(
    () => Math.random() > 0.5
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Giorgi",
      email: "giorgi@gmail.com",
      phone: "123456",
      image: "https://i.pravatar.cc/150?img=1",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Ana",
      email: "ana@gmail.com",
      phone: "789101",
      image: "https://i.pravatar.cc/150?img=2",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Nika",
      email: "nika@gmail.com",
      phone: "555666",
      image: "https://i.pravatar.cc/150?img=3",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, isFavorite: !u.isFavorite } : u
      )
    );
  };

  return (
    <div className="p-5 space-y-10">
      <div>
        {staticItems.map((item, i) => (
          <h1 key={i}>{item}</h1>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="w-20 h-20 flex items-center justify-center text-white font-bold rounded-lg"
            style={{ backgroundColor: box.color }}
          >
            {box.number}
          </div>
        ))}
      </div>

      <div>
        <input
          className="border p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1>{text}</h1>
      </div>

      <div className="flex flex-wrap gap-1">
        {boolArray.map((val, i) => (
          <span key={i} className="w-6 text-center">
            {val ? 1 : 0}
          </span>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-xl w-64">
            <img
              src={user.image}
              className="w-16 h-16 rounded-full"
            />

            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>

            <button onClick={() => toggleFavorite(user.id)}>
              <span
                className={
                  user.isFavorite ? "text-yellow-400" : "text-black"
                }
              >
                ★
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}