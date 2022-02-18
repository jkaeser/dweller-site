import React from "react"

import "../nav.css"

const Nav = ({ items, id, align }) => (
  <nav className={`nav ${align ? 'nav--' + align : ''}`} id={ id }>
    <ul className="nav__items">
      { items.map(item => (
        <li className="nav__item" key={ item.href }>
          <a href={ item.href } className="nav__link">
            <span>
              { item.label }
            </span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav;
