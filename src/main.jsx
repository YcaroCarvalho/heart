import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <App />} />
        <Route path="/protectedPage" 
        element={
        <PrivateRoute>
          <ProtectedPage />
        </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
