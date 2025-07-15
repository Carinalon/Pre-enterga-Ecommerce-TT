import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AdminProvider>
        <AuthProvider>
          <CartProvider>
            <App />
            <ToastContainer />
          </CartProvider>
        </AuthProvider>
      </AdminProvider>
    </Router>
  </StrictMode>
);
