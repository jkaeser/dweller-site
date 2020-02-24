import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "components/Nav";
import NavExternal from "components/Nav/NavExternal";

import headerImg from 'images/dweller-bcamp-header.png';
import icon_apple from "images/apple.png"
import icon_bc from "images/bandcamp.png"
import icon_fb from "images/fb.png"
import icon_ig from "images/ig.png"
import icon_spotify from "images/spotify.png"
import icon_yt from "images/youtube.png"

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
    'label': 'Facebook',
    'icon': icon_fb,
    'icon_alt': 'Apple logo'
  },
  {
    'href': 'https://www.instagram.com/old_dweller/',
    'label': 'Instagram',
    'icon': icon_ig,
    'icon_alt': 'Instagram logo'
  },
  {
    'href': 'https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW',
    'label': 'Spotify',
    'icon': icon_spotify,
    'icon_alt': 'Spotify logo'
  },
  {
    'href': 'https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW',
    'label': 'Apple Music',
    'icon': icon_apple,
    'icon_alt': 'Apple logo'
  },
  {
    'href': 'https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW',
    'label': 'Bandcamp',
    'icon': icon_bc,
    'icon_alt': 'Bandcamp logo'
  },
  {
    'href': 'https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW',
    'label': 'YouTube',
    'icon': icon_yt,
    'icon_alt': 'YouTube logo'
  }
]

const Header = ({ siteTitle }) => (
  <header className="header layout__header">
    <div className="header__inner">
      <Link to="/" className="logo">
        <span>Dweller</span>
        <span>/ / /</span>
        <span>Aquarium</span>
      </Link>
      <Nav items={ nav_main } id={`main`} />
      <NavExternal items={ nav_social } id={`social`} align='horizontal' />
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
