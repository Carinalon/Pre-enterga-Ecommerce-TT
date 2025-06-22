import React from 'react'
import Header from '../Componentes/estaticos/Header'
import Footer from '../Componentes/estaticos/Footer'


const Contacto = ({cart, borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <div className='contenedor__contacto' >
        <h1 className="titulo__home">Hola soy Emma</h1>
        <h2>Esta es mi pagina de contacto</h2>
        <img src="/src/assets/img/Emma.png" alt="Foto de Emma" />
        <form className="form" action="">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
      

      <Footer />
    </>
  );
}

export default Contacto
