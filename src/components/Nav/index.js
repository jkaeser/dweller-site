import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = () => (
  <nav className="nav">
    <ul className="nav__items">
      <li className="nav__item">
        <Link to="/" className="nav__link">
          Music
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/about" className="nav__link">
          About
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/contact" className="nav__link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav;
