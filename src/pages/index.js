import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Music"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <iframe
      style={{
        border: '0',
        width: '500px',
        height: '1027px'
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=4021454801/size=large/bgcol=ffffff/linkcol=0687f5/package=4208657613/transparent=true/"
      seamless
    >
      <a href="http://dwellermusic.bandcamp.com/album/dweller-2">Dweller by Dweller</a>
    </iframe>
  </Layout>
)

export default IndexPage;
