import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { setIsAuth } = useContext(CartContext);
  const [role, setRole] = useState("");

  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuth") === "true";
    const userRole = localStorage.getItem("role") || "";
    if (isAuthenticated && userRole === "admin") {
      setIsAuth(true);
      setRole(userRole);
      navigate("/admin");
    } else if (isAuthenticated && userRole === "cliente") {
      setIsAuth(true);
      setRole(userRole);

      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    //esto analiza que no este vacio
    e.preventDefault();
    let validationErrors = {}; //objeto vacio que va a almacenar claves
    if (!email) validationErrors.email = "El email es obligatorio";
    if (!password) validationErrors.password = "La contraseña es obligatoria";

    if (Object.keys(validationErrors).length > 0) {
      // object.keys devuelve un array con las claves del objeto
      setError(validationErrors);
      return;
    }

    try {
      const res = await fetch("data/users.json");
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setError({ email: "credenciales inválidas" });
      } else {
        console.log("User role:", foundUser.role);

        if (foundUser.role === "admin") {
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
          localStorage.setItem("role", foundUser.role);
          navigate("/admin");
        } else {
          setIsAuth(true);
          localStorage.setItem('isAuth', true)
          localStorage.setItem('role', foundUser.role);
          navigate('/');
        }
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError({ email: "Error al iniciar sesión, intente más tarde" });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email, setEmail,password, setPassword, handleSubmit,error,role
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
