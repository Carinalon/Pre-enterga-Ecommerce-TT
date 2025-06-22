import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Login = () => {
  const { setIsAuth } = useContext(CartContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => { //esto analiza que no este vacio
    e.preventDefault();
    let validationErrors = {};  //objeto vacio que va a almacenar claves
    if (!email) validationErrors.email = "El email es obligatorio";
    if (!password) validationErrors.password = "La contraseña es obligatoria";

    if (Object.keys(validationErrors).length > 0) {
      // object.keys devuelve un array con las claves del objeto
      setError(validationErrors);
      return;
    }

    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setError({ email: "credenciales inválidas" });
      } else {
        console.log('User role:', foundUser.role);

        if (foundUser.role === 'admin') {
          setIsAuth(true);
          navigate('/admin');
        } else {
          navigate("/");
        }
      }
    } catch(err) {
      console.error('Error fetching users:', err);
      setError({ email: "Error al iniciar sesión, intente más tarde" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{display: "flex", flexDirection: "column", gap: "1rem",
        maxWidth: "400px", margin: "auto",
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
          <div style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}
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
      >Enviar</button>
    </form>
  );
};

export default Login;
