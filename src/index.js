import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
