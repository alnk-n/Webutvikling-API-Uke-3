import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { StrictMode } from "react";
import GameGrid from "./Components/GameGrid";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GameGrid />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
