import { useState} from "react";
import { NavLink } from "react-router-dom";
import "./stylesEstatico.css";
import Cart from "../Cart.jsx";

import { FaShoppingCart } from "react-icons/fa"; //ver de donde sale esto

const Header = () => {
  
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <img className="logo" src="/public/img/logo.png" alt="logo" />
          </li>
          <li>
            <NavLink to="/" className="link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/acercade" className="link">
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className="link">
              Galería de productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="link">
              Contacto
            </NavLink>
          </li>
          <li className="cart__nav">
            <button className=" btncart" onClick={() => setCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          </li>
          <li className="btnLogin">
            <NavLink to="/login" className="link">
              <i className="fa-solid fa-right-to-bracket"></i>
            </NavLink>
          </li>
          <li className="btnAdmin">
            <NavLink to="/admin" className="link">
              <i className="fa-solid fa-user-tie"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
