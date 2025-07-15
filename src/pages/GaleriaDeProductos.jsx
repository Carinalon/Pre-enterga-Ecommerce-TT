import React from "react";
import Header from "../Componentes/estaticos/Header";
import Footer from "../Componentes/estaticos/Footer";
import ProductList from "../Componentes/ProductList";
import loading from "../assets/cargando.gif";
import { CartContext } from "../context/CartContext";

const GaleriaDeProductos = () => {

  const {cargando} = useContext(CartContext)
  
  return (
    <>
      <Header />
      <h1 className="titulo__home">Galería de productos</h1>
      {
        cargando ? <img src={loading} alt="loading" /> : 
      
      <ProductList />
      }

      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
