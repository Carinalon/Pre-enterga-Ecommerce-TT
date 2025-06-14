import React, { useState } from 'react';

export default function Formulario() {
    // Hook useState para manejar el estado del formulario

  const [nombre, setNombre] = useState('');  // Estado para almacenar el nombre ingresado
    
  function manejarEnvio(evento) {   // Maneja el envío del formulario
        
      evento.preventDefault(); //para que no recargue la web  // Previene el comportamiento por defecto del formulario
      alert(`Formulario enviado por: ${nombre}`);
      setNombre(''); // Limpia el campo de entrada después del envío
  }
  return (
      <form onSubmit={manejarEnvio}>
          <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
      </form>
  );
}