import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const AboutPage = () => (
  <Layout>
    <SEO
      title="Videos"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <h1>Videos</h1>
    <iframe width="7200" height="405" src="https://www.youtube.com/embed/N2fkRe090LQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      <a href="https://youtu.be/N2fkRe090LQ">Watch Dweller – Elliot on YouTube</a>
    </iframe>
    <iframe width="720" height="405" src="https://www.youtube-nocookie.com/embed/hnO6mLUQ2zA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      <a href="https://youtu.be/hnO6mLUQ2zA">Watch Dweller – Bugs on YouTube</a>
    </iframe>
  </Layout>
)

export default AboutPage;
