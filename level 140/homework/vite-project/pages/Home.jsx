import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="p-4 text-xl">Welcome to the Home Page</h1>
    </div>
  );
}