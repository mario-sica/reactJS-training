import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";

const appElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(appElement);
