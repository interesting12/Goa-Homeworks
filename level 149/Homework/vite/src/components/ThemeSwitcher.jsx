import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const style = {
    height: "100vh",
    padding: 20,
    background: theme === "dark" ? "#111" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <div style={style}>
      <h1>{theme.toUpperCase()} MODE</h1>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}