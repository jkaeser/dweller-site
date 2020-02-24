import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "components/Nav";
import headerImg from 'images/dweller-bcamp-header.png';

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
    'href': '/contact',
    'label': 'Contact'
  }
]

const nav_social = [
  {
    'href': 'https://www.facebook.com/dwellermusic/',
    'label': 'Facebook'
  },
  {
    'href': 'https://www.instagram.com/old_dweller/',
    'label': 'Instagram',
  },
  {
    'href': 'https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW',
    'label': 'Spotify'
  }
]

const Header = ({ siteTitle }) => (
  <header className="header layout__header">
    <Link to="/" className="logo">
      <span>Dweller</span>
      <span>/ / /</span>
      <span>Aquarium</span>
    </Link>
    <Nav items={ nav_main } id={`main`} />
    <Nav items={ nav_social } id={`social`} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
