import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = ({ items, id }) => (
  <nav className="nav" id={ id }>
    <ul className="nav__items">
      { items.map(item => (
        <li className="nav__item">
          <Link to={ item.href } className="nav__link">
            { item.label }
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav;
