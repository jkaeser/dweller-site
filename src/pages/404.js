import React from "react";
import { Link } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/Seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      404, yo.
    </h1>
    <p>
      That means this page, like, isn't a thing.
    </p>
    <p>
      We understand if that makes you sad.
    </p>
    <Link to="/">Listen to some tunes instead.</Link>
  </Layout>
)

export default NotFoundPage;
