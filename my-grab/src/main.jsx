import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GrabFoodApp from "./GrabFoodApp";
import AppDetail from "./AppDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="GrabFoodApp" element={<GrabFoodApp />} />
        <Route path="AppDetail" element={<AppDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
