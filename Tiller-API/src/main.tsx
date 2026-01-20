import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { StrictMode } from "react";
import "./index.css";

import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<GameGrid />} />
        <Route path="/categories" element={<div>Categories</div>} />
        <Route path="/search" element={<div>Search</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);