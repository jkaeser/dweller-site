import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "components/Nav";

import './header.css'

const nav_main = [
  {
    'href': '/',
    'label': 'Music'
  },
  {
    'href': '/about',
    'label': 'About'
  },
  {
    'href': '/videos',
    'label': 'Videos'
  },
  {
    'href': '/press',
    'label': 'Press'
  },
  {
    'href': '/contact',
    'label': 'Contact'
  },
  {
    'href': 'https://www.etsy.com/shop/DwellerMusicApparel',
    'label': 'Merch'
  }
];

const Header = ({ siteTitle }) => (
  <header className="header layout__header">
    <div className="header__inner">
      <div className="header__main">
        <Link to="/" className="logo"><span>Dweller</span></Link>
        <br />
        <a href="https://blacklivesmatter.com/" target="_blank" className="blm">
          <span>Black Lives Matter</span>
        </a>
      </div>
      <Nav items={ nav_main } id={`main`} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
