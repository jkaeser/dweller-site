import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "components/Header";
import Footer from "components/Footer";

import './layout.css'

import stairway_pic from "images/band-pic-stairway.jpg"
import rooftop_pic from "images/band-pic-rooftop.jpg"
import steps_pic from "images/band-pic-steps.jpg"
import wall_pic from "images/band-pic-wall.jpg"
import wall_pic_2 from "images/band-pic-wall-2.jpg"
import cody_pic from "images/recording-cody.jpg"
import john_pic from "images/recording-john.jpg"
import luke_pic from "images/recording-luke.jpg"

const images = [
  {
    src: stairway_pic,
    alt: 'A photo of the band from the top of a residential staircase. They are looking up at the camera.',
  },
  {
    src: rooftop_pic,
    alt: 'The band sitting along a parking garage rooftop with the Philadelphia skyline behind them.',
  },
  {
    src: steps_pic,
    alt: 'The band sitting on a row home stoop, smiling at the camera.',
  },
  {
    src: wall_pic,
    alt: 'The band laughing in front of a large stucco wall in parking lot.',
  },
  {
    src: wall_pic_2,
    alt: 'The band lined up along an outdoor wall, looking directly at the camera.',
  },
  {
    src: cody_pic,
    alt: 'Cody.',
  },
  {
    src: john_pic,
    alt: 'John.',
  },
  {
    src: luke_pic,
    alt: 'Luke.',
  },
];

const renderRandomImage = images => {
  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <img
      src={image.src}
      alt={image.alt}
      className="stuck"
    />
  )
}

const Layout = ({ children, images }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <a href="#main" id="skip-link">Skip to main content</a>
      <div className="layout__wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layout__content">
          <div className="layout__content-inner">
            <span id="main"></span>
            {children}
            {images && renderRandomImage(images)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }))
};

Layout.defaultProps = {
  images: images
}

export default Layout;
