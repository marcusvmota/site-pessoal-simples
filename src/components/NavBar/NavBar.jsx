import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <ul>
        <li className="button">
          <Link to="/">Currículo</Link>
        </li>
        <li className="button">
          <Link to="/portfolio">Portfólio</Link>
        </li>
        <li className="button">
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
