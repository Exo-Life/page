import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__header'>
        <h1>Acerca de Nosotros</h1>
        <p>Bienvenidos a nuestro viaje de innovación y movilidad.</p>
      </div>
      <div className='about__content'>
        <div className='about__box'>
          <h2>Misión</h2>
          <p>
            Construir y distribuir prótesis exoesqueléticas de manera más económica para la
            población de los estratos 3, 4 y 5 de Colombia.
          </p>
        </div>
        <div className='about__box'>
          <h2>Visión</h2>
          <p>
            Convertirnos en una empresa líder a nivel internacional en innovación, atrayendo a un
            gran número de clientes y estableciéndonos como una empresa altamente competitiva.
          </p>
        </div>
        <div className='about__box'>
          <h2>Lema</h2>
          <p>Movilidad sin Límites.</p>
        </div>
        <div className='about__box'>
          <h2>Valores</h2>
          <p>Nuestros valores incluyen responsabilidad, compromiso, creatividad y empatía.</p>
        </div>
      </div>
    </div>
  );
}

export default About
