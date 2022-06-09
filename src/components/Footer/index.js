import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <hr />
      <a
        className="icon"
        href="https://www.linkedin.com/in/edwin-kevin-simental-frayre-09a6a9185/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className="icon" href="https://github.com/Kevin31esder">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
    </footer>
  )
}

export default Footer
