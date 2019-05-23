import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import headerImg from '../images/dweller-bcamp-header.png';

function Header({ siteTitle }) {
  const linkClasses = "block mt-4 md:inline-block md:mt-0 mr-6 no-underline hover:underline";

  return (
    <header className="bg-tan border-blue border-b-4 text-blue">
      <Link to="/" className="flex items-center justify-center p-8 no-underline">
        <img src={headerImg} />
      </Link>
      <nav className="mb-4 flex items-center justify-center">
        <Link
          to="/"
          className={ linkClasses }
        >
          Music
        </Link>

        <Link
          to="/about"
          className={ linkClasses }
        >
          About
        </Link>

        <Link
          to="/contact"
          className={ linkClasses }
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
