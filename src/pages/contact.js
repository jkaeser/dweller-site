import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <h1 className="visually-hidden">Contact</h1>
    <p>
      Follow us on <a href="https://www.facebook.com/dwellermusic/">Facebook</a> and <a href="https://www.instagram.com/old_dweller/">Instagram</a>.
    </p>
    <p>
      Shoot us an email at <a className="font-bold hover:underline" href="mailto:dwellerphilly@gmail.com">dwellerphilly@gmail.com</a>.
    </p>
  </Layout>
)

export default ContactPage;
