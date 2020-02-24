import React from "react"

import "../nav.css"

const Nav = ({ items, id, align }) => (
  <nav className={`nav ${align ? 'nav--' + align : ''}`} id={ id }>
    <ul className="nav__items">
      { items.map(item => (
        <li className="nav__item">
          <a href={ item.href } className="nav__link">
            { item.icon &&
              <img src={item.icon} alt={item.icon_alt}/>
            }
            <span className={item.icon ? 'visually-hidden' : ''}>
              { item.label }
            </span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav;
