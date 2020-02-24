import React from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = ({ items, id, align }) => (
  <nav className={`nav ${align ? align : ''}`} id={ id }>
    <ul className="nav__items">
      { items.map(item => (
        <li className="nav__item">
          <Link to={ item.href } className="nav__link" activeClassName="active">
            { item.icon &&
              <img src={item.icon} alt={item.icon_alt}/>
            }
            <span className={item.icon ? 'visually-hidden' : ''}>
              { item.label }
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav;
