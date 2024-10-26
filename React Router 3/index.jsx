import { Root } from "./Root";
import { createRoot } from "react-dom/client";

const appElement = (
  <StrictMode>
    <Root />
  </StrictMode>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(appElement);
