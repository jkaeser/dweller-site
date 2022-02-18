import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "components/Nav";
import NavExternal from "components/Nav/NavExternal";

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
]

const nav_social = [
  {
    'href': 'https://music.apple.com/us/album/dweller/1435833656',
    'label': 'Apple Music',
  },
  {
    'href': 'https://dwellermusic.bandcamp.com/',
    'label': 'Bandcamp',
  },
  {
    'href': 'https://www.facebook.com/dwellermusic/',
    'label': 'Facebook',
  },
  {
    'href': 'https://www.instagram.com/old_dweller/',
    'label': 'Instagram',
  },
  {
    'href': 'https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW',
    'label': 'Spotify',
  },
  {
    'href': 'https://www.youtube.com/channel/UC6C--XpN2rV1rFYAxi1MjVA',
    'label': 'YouTube',
  }
]

const Header = ({ siteTitle }) => (
  <header className="header layout__header">
    <div className="header__inner">
      <Link to="/" className="logo"><span>Dweller</span></Link>
      <br />
      <a href="https://blacklivesmatter.com/" target="_blank" className="blm">
        <span>Black Lives Matter</span>
      </a>
      <Nav items={ nav_main } id={`main`} />
      {/* <NavExternal items={ nav_social } id={`social`} /> */}
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
