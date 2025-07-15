import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setIsAuth } = useContext(CartContext);
  const {email, setEmail, password, setPassword, handleSubmit, error } = useAuth();

  
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="formBasicEmail"
          style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
        >
          Correo electrónico
        </label>
        <input
          id="formBasicEmail"
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.5rem",
            border: `1px solid ${error.email ? "red" : "#ced4da"}`,
            borderRadius: "0.25rem",
          }}
        />
        {error.email && (
          <div
            style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}
          >
            {error.email}
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="formBasicPassword"
          style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
        >
          Contraseña
        </label>
        <input
          id="formBasicPassword"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "0.5rem",
            border: `1px solid ${error.password ? "red" : "#ced4da"}`,
            borderRadius: "0.25rem",
          }}
        />
        {error.password && (
          <div
            style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}
          >
            {error.password}
          </div>
        )}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "0.75rem",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default Login;
