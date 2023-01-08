import React from "react";
import ReactDOM from "react-dom/client";
// import "tailwindcss/tailwind.css";
// import "./index.css";
import "./styles/app.css";
import VocaApp from "./VocaApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VocaApp />
  </React.StrictMode>
);
