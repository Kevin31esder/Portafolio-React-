import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoName from '../../assets/images/E.png'

function Navigation() {
  return (
    <div className="navbar">
      <img className="logo" src={LogoName} alt="logo" />
      <nav className="nav-list">
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          className="list-item"
        >
          Acerca de Mi
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/resume"
          className="list-item"
        >
          {' '}
          Resumen
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="list-item"
        >
          {' '}
          Portafolio
        </NavLink>
      </nav>
    </div>
  )
}

export default Navigation
