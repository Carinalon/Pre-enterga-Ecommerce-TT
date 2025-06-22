import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./stylesEstatico.css";
import Cart from '../Cart.jsx';
import { CartContext } from "../../context/CartContext.jsx";

const Header = ({cartItems, borrarProducto}) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cart,  productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated } = useContext(CartContext);

  return (
    <header>
      <nav>
        <ul>
          <li><img className="logo" src="/src/assets/img/logo.png" alt="logo"/></li>
          <li><Link to="/" className="link">Inicio</Link></li>
          <li><Link to="/acercade" className="link">Sobre nosotros</Link></li>
          <li><Link to="/productos" className="link">Galería de productos</Link></li>
          <li><Link to="/contacto" className="link">Contacto</Link></li>
          <li className="cart__nav">
            <button className=" btncart" onClick={() => setCartOpen(true)}
            ><i className="fa-solid fa-cart-shopping"></i></button>
            <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={() => 
            setCartOpen(false)}/>
          </li>
          <li className='btnLogin'>
              <Link to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></Link>
            </li>
            <li className='btnAdmin'>
              <Link to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></Link>
            </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
