import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
      />
      <div className="foo">
        Shoot us an email at <a className="font-bold hover:underline" href="mailto:dwellerphilly@gmail.com">dwellerphilly@gmail.com</a>.
      </div>
    </Layout>
  );
}

export default ContactPage;
