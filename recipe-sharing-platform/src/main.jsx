import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="recipe/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
