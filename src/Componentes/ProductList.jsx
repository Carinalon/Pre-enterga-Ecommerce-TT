import React from 'react'
import Productos from './Productos'


const ProductList = ({productos, agregarCart}) => {
  return (
    <>
      <h2>Galería de Productos</h2>
      <div style={{display: 'flex', flexWrap: 'wrap',justifyContent:'space-evenly', gap: '20px'}}>
      {
        productos.map(producto => (
          <Productos key={producto.id} producto={producto} agregarCart={agregarCart}/>
          // Aquí se pasa el producto individual a cada componente Productos

        ))
      }
      </div>


    </>
  )
}

export default ProductList
