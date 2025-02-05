import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { WetherAPI } from "./components/WetherAPI";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WetherAPI />
  </StrictMode>
);
