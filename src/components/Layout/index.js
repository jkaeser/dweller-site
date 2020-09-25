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
        <div class="banners">
          <a href="https://blacklivesmatter.com/" class="blm" target="_blank">Black Lives Matter</a>
          <a href="https://www.nivassoc.org/" class="niva" target="_blank">
            <abbr title="National Independent Venue Association">NIVA</abbr> #SaveOurStages
          </a>
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
