import React, {useContext}  from 'react';
import "./styleCart.css"
import { CartContext } from '../context/CartContext'


const Cart = ({isOpen, onClose}) => {

 const {cart, handleDeleteFromCart} = useContext(CartContext)
  

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className='cart__header'>
        <h2>Carrito de compras</h2>
        <button onClick={onClose} className="close__button">x</button>
      </div>
      <div className="cart__content">
        {cart.length === 0 ? (<p>El carrito está vacío</p>) :
         (<ul className="cart__items">
            {cart.map((item) => (
                <li key={item.id} style={{color:"black"}}>
                  {item.nombre} - ${item.precio} - Cant: {item.quantity} 

                  <button className='tacho' onClick={()=> handleDeleteFromCart(item)}>
                  <img src='/public/trash-can.svg' alt="tacho de basura"/></button>
                </li>
            ))}
          </ul>
        )}
      </div>
    
    </div>
  );
};

export default Cart;
