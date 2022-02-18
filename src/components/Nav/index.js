import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = ({ items, id }) => (
  <nav className={`nav`} id={`nav-${id}`}>
    <ul className="nav__items">
      { items.map(item => (
        <li className="nav__item">
          <Link to={ item.href } className="nav__link" activeClassName="active">
            <span>{ item.label }</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav;
