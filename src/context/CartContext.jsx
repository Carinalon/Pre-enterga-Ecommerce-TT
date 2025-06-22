import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)

    useEffect(() => {
        fetch('/data/data.json')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })

    }, [])

    const handleAddToCart = (producto) => {
      const productInCart = cart.find(item => item.id === producto.id)
      if (productInCart) {
        setCart(cart.map((item) => item.id === producto.id
              ? { ...item, quantity: item.quantity + 1 }
              : item));
      } else {
        setCart([...cart, { ...producto, quantity: 1 }]);
      }
    };

    const handleDeleteFromCart = (product) => {
      setCart((preVCart) => {  //prev cart verifica que hay en el carrito
        return preVCart.map((item) => {
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
          .filter((item) => item != null)
      });
    };

    return (
        <CartContext.Provider 
        value={

            { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth}
        }>
            {children}
        </CartContext.Provider>
    )
}