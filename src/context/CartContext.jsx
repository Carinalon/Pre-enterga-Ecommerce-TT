import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false); // Para la autenticación
  const [busqueda, setBusqueda] = useState(""); // Para la búsqueda de productos

  useEffect(() => {
    fetch("/data/data.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const productosFiltrados = productos.filter((producto) =>
    producto?.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: product.cantidad }
            : item
        )
      );
    } else {
      toast.success(`El producto ${product.nombre} se ha agregado al carrito`);
      setCart([...cart, { ...product, cantidad: product.cantidad }]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((preVCart) => {
      //prev cart verifica que hay en el carrito
      return preVCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.info("Compra finalizada con éxito");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        productos,
        cargando,
        error,
        handleAddToCart,
        handleDeleteFromCart,
        isAuthenticated,
        setIsAuth,
        productosFiltrados,
        busqueda,
        setBusqueda,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
