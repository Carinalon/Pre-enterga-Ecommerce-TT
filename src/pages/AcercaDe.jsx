import React from 'react'
import Header from '../Componentes/estaticos/Header'
import Footer from '../Componentes/estaticos/Footer'
import './StyleAcercaD.css'

const AcercaDe = () => {
  return (
    <>
      <Header />
      <main className="sobremi">
        <h1>Acerca de</h1>
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sunt
          nobis sit sed, architecto obcaecati aut aliquid natus dolore nulla
          odit corrupti eligendi. Tenetur a dicta quisquam enim est quis! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam,
          placeat harum omnis sequi iste at voluptatum numquam laboriosam porro
          corporis est eius nulla quasi nam accusantium natus eaque architecto!
        </p>
        <img src="/public/img/Emma.png" alt="Foto de Emma" />
      </main>
      <Footer />
    </>
  );
}

export default AcercaDe
