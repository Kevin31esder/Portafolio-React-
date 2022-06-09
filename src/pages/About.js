import React from 'react'
import AboutImage from '../components/AboutImage'

function About() {
  return (
    <section>
      <div class="flex-container">
        <div class="flex-left">
          <AboutImage />
        </div>
        <div class="flex-right">
          <h2>Edwin Kevin Simental Fraye</h2>
          <h3>Front-End developer</h3>
          <br></br>
          <p>
            Soy egresado de la carrera de Ingeniería en Ciencias de los
            Materiales de la Universidad Juárez del estado de Durango. Durante
            mi formación profesional adquirí conocimientos útiles para el campo
            de la programación, como habilidades matemáticas generales,
            algoritmos, cálculo, entre otros , además de esto he aplicado mis
            conocimientos de programación para automatización de procesos
            repetitivos, asi como creación y mantenimiento de páginas web en
            general tanto por la parte de front end, como la creación de bases
            de datos relacionales y REST APIs.
          </p>
          <p>
            {' '}
            Dichos conocimientos fueron adquiridos como autodidacta ya que es un
            tema que siempre me ha apasionado y he aprendido a lo largo del
            tiempo, además de tener también cursos certificados por google,
            udemy, freecodecamp, entre otros. Actualmente estoy ampliando mis
            conocimientos de programación y desarrollo de software.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
