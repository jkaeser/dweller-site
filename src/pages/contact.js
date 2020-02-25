import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <h1>Contact</h1>
    <p>
      Shoot us an email at <a className="font-bold hover:underline" href="mailto:dwellerphilly@gmail.com">dwellerphilly@gmail.com</a>.
    </p>
  </Layout>
)

export default ContactPage;
