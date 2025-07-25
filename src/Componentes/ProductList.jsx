import React, { useContext } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";


const ProductList = () => {
  const { productos, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  return (
    <>
      <h2 className="titulo__Gal">Galería de Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {productosFiltrados.map((producto) => (
          <Productos key={producto.id} producto={producto} />
          // Aquí se pasa el producto individual a cada componente Productos
        ))}
      </div>
    </>
  );
};

export default ProductList;
