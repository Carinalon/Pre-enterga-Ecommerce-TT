import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylesEstatico.css";
import Cart from '../Cart.jsx';

const Header = ({cartItems, borrarProducto}) => {
  const [isCartOpen, setCartOpen] = useState(false);

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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
