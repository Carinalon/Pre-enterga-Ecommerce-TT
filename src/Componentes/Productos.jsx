import React from 'react'
import './styleProductos.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Productos = ({producto, agregarCart}) => {
  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad (prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad (prev =>  (prev > 1 ? prev - 1 : prev));
  


  return (
    <section className='card'>
      <div className='imagenContainer'>
        <img src={producto.imagen}alt="" className='imagen'/>
      </div>
      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>{producto.stock}</p>
    
      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>
      <button onClick={() => agregarCart(producto)}>Agregar al carrito</button>
      
      <Link to={`/productos/${producto.id}`} className='detalle__prod'>Ver mas</Link>

    </section>
  )
}

export default Productos
