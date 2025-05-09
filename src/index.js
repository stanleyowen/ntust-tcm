import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

if (process.env.NODE_ENV === "production") {
  // Disable right-click
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  // Disable text selection
  document.addEventListener("selectstart", (event) => event.preventDefault());

  // Disable keyboard shortcuts (e.g., Ctrl+C, Ctrl+Shift+I, F12)
  document.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "s")) || // Ctrl+C, Ctrl+U, Ctrl+S
      event.key === "F12" || // F12 for DevTools
      (event.ctrlKey && event.shiftKey && event.key === "I") // Ctrl+Shift+I for DevTools
    ) {
      event.preventDefault();
    }
  });
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
