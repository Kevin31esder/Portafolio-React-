import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Resume() {
  return (
    <section>
      <div className="center-item">
        <h3>Mis Habilidades:</h3>
      </div>
      <div class="row">
        <div class="column">
          <h4>Browser Based Technologies</h4>
          <p>HTML/CSS/Bootstrap</p>
          <p>JavaScript/jQuery/React.js</p>
          <p>Redux/Redux-Toolkit</p>
          <p>Local Storage, Session Storage.</p>
          <p>Aprendiendo:TypeScript</p>
        </div>
        <div class="column">
          <p>
            <h4>API </h4>
            <p>MVC</p>
            <p>Rest</p>
            <p>Json</p>
          </p>
        </div>
        <div class="column">
          <p>
            <h4>Databases</h4>
            <p>MySQL</p>
            <p>MongoDB</p>
          </p>
        </div>
      </div>
      <div>
        <a className="icon3" href="./CV-Edwin-kevin-Simental-Frayre.pdf">
          <FontAwesomeIcon icon={faFileCircleCheck} />
          <h5>Descargar Resumen</h5>
        </a>
      </div>
    </section>
  )
}

export default Resume
