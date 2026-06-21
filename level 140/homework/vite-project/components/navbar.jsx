import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}