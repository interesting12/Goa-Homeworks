import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
    if (page === "login") return <Login />;
    if (page === "signup") return <Signup />;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-center gap-4 p-4 bg-white shadow">
        <button onClick={() => setPage("home")} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300">Home</button>
        <button onClick={() => setPage("about")} className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition duration-300">About</button>
        <button onClick={() => setPage("contact")} className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition duration-300">Contact</button>
        <button onClick={() => setPage("login")} className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">Login</button>
        <button onClick={() => setPage("signup")} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition duration-300">Signup</button>
      </nav>

      <div className="p-10 flex justify-center">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;