import React, { useState } from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

function ProductList({ items }) {
  if (items.length === 0) return <p>No products found</p>;
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const products = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry"];

  const filtered = products.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1>Product Search</h1>
        <SearchBar onSearch={setQuery} />
        <ProductList items={filtered} />
      </div>
    </div>
  );
}
