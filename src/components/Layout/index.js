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
      <div className="layout__wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layout__content">
          <div className="layout__content-inner">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
