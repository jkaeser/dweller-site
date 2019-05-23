import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-2xl font-bold flex justify-center items-center flex-col">
        <h1>
          404, yo.
        </h1>
        <p className="mt-6">
          That means this page, like, isn't a thing.
        </p>
        <p className="mt-6">
          We understand if that makes you sad.
        </p>
        <div className="text-center mt-6">
          <Link className="inline-block border-2 border-blue px-4 py-2 rounded hover:text-blue hover:bg-tan" to="/">Listen to some tunes instead.</Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
