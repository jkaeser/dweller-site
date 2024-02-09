import React, { useState } from "react"
import { Link } from "gatsby"

import "./nav.css"

const Nav = ({ items, id }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <div className="nav">
      <button
        className={`nav__toggle${open ? ' open': ''}`}
        onClick={() => setOpen(!open)}
      >
        <span className="visually-hidden">Toggle navigation menu</span>
      </button>
      <nav className={`nav__navigation${open ? ' open': ''}`} id={`nav-${id}`}>
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
    </div>
  )
}

export default Nav;
