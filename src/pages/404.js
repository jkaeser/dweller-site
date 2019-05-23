import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold block my-8 p-3">
          Dude, this page isn't, like, a thing, man.
        </h2>
        <div className="text-center">
          <Link className="inline-block border-2 border-blue px-4 py-2 rounded hover:text-blue hover:bg-tan" to="/">Go home</Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
