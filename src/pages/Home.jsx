import React, {useContext} from 'react'
import Header from '../Componentes/estaticos/Header'
import Footer from '../Componentes/estaticos/Footer'
import ProductList from '../Componentes/ProductList';
import loading from '../assets/cargando.gif'
import { CartContext } from '../context/CartContext';



const Home = ({ handleAddToCart}) => {

  const {cargando} = useContext(CartContext)

  return (
    <>
      <Header />
      <main className='main__home'> 
        <h1 className='titulo__home' >Bienvenidos a mi Pet Shop</h1>
        <p className='texto__home' >
          En nuestra tienda encontrarás todo lo que necesitas para cuidar y
          consentir a tu mascota.</p>
       {
          cargando ? <img src={loading} alt='loading'/> :

          <ProductList />
          }

      </main>
      <Footer />
    </>
  );
}

export default Home
