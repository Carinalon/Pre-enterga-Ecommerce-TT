import React, { useContext } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";


const ProductList = ({ handleAddToCart }) => {
  const { productos } = useContext(CartContext);

  return (
    <>
      <h2 className="titulo__Gal">Galería de Productos</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {productos.map((producto) => (
          <Productos key={producto.id} producto={producto} />
          // Aquí se pasa el producto individual a cada componente Productos
        ))}
      </div>
    </>
  );
};

export default ProductList;
