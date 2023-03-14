import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { History } from "./components/history";
import { Stats } from "./pages/stats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
