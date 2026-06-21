import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const jsxDiv = (
  <div>
    <h1>Hello React</h1>
  </div>
);

const createElementDiv = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello React")
);

const websiteJSX = (
  <div>
    <h1>My Website</h1>
    <p>Welcome to my site!</p>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
);

const websiteCreateElement = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "My Website"),
  React.createElement("p", null, "Welcome to my site!"),
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Home"),
    React.createElement("li", null, "About"),
    React.createElement("li", null, "Contact")
  )
);

console.log("JSX Virtual DOM:");
console.log(websiteJSX);

console.log("React.createElement Virtual DOM:");
console.log(websiteCreateElement);

root.render(
  <div>
    <h2>1) JSX Example</h2>
    {jsxDiv}

    <h2>2) React.createElement Example</h2>
    {createElementDiv}

    <h2>3) Website Rendered with JSX</h2>
    {websiteJSX}

    <h2>3) Website Rendered with React.createElement</h2>
    {websiteCreateElement}
  </div>
);