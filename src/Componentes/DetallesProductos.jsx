import React from 'react'
import { useParams } from 'react-router-dom'
import './styleProductos.css'



const DetallesProductos = ({productos}) => {
   
    
    const {id} = useParams()  //useParams es el que identifica el id del producto que se pasa por los : en el path de app

    const product = productos.find(producto => producto.id == id) //find busca el id del producto y lo devuelve
  

  return (
    <>
      <h1>Detalle del producto: {id}</h1>
      {product ? (<h2>{product.nombre} {product.descripcion} </h2>) : (<p>Producto no encontrado</p>)}
     
    </>
  )
}

export default DetallesProductos
