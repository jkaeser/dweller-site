import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "components/Nav";
import headerImg from 'images/dweller-bcamp-header.png';

import './header.css'

const nav_items = [
  {
    'href': '/',
    'label': 'Music'
  },
  {
    'href': '/about',
    'label': 'About'
  },
  {
    'href': '/contact',
    'label': 'Contact'
  },
];

const Header = ({ siteTitle }) => (
  <header className="header layout__header">
    <Link to="/" className="logo">
      <span>Dweller</span>
      <span>/ / /</span>
      <span>Aquarium</span>
    </Link>
    <Nav items={ nav_items } id={`main`} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
