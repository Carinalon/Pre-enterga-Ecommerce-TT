import React from 'react'
import Header from '../Componentes/estaticos/Header'
import Footer from '../Componentes/estaticos/Footer'
import ProductList from '../Componentes/ProductList'
import loading from '../assets/cargando.gif'

const GaleriaDeProductos = ({cart, productos, cargando, agregarCart, borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
        <h1 className='titulo__home' >Galeria de productos</h1>
      {cargando ? (
        <img src={loading} alt="loading" />
      ) : (
        <ProductList agregarCart={agregarCart} productos={productos} />
      )}

      <Footer />
    </>
  );
};

export default GaleriaDeProductos
