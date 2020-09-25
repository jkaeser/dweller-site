import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "components/Header";
import Footer from "components/Footer";

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <a href="#main" id="skip-link">Skip to main content</a>
        <div id="blm">
          <a href="https://blacklivesmatter.com/" target="_blank">Black Lives Matter</a>
        </div>
        <div className="layout__wrapper">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="layout__content">
            <div className="layout__content-inner">
              <span id="main"></span>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
