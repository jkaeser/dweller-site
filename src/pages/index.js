import React from "react";

import Layout from "components/Layout";
import SEO from "components/Seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Music"
      keywords={[`dweller`, `dweller philadelphia`, `philadelphia music`]}
    />
    <h1 className="visually-hidden">Music</h1>
    <a className="cta apple" href="https://music.apple.com/us/album/dweller/1435833656">
      Listen on Apple Music
    </a>
    <a className="cta bandcamp" href="https://dwellermusic.bandcamp.com/">
      Listen on Bandcamp
    </a>
    <a className="cta spotify" href="https://open.spotify.com/artist/4naQpSaaarFkX4EXYCJ4bW">
      Listen on Spotify
    </a>
    <iframe style={{
        border: '0',
        width: '500px',
        height: '120px'
      }}
      src="https://bandcamp.com/EmbeddedPlayer/track=2818753894/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://dwellermusic.bandcamp.com/track/crowbar">
        Crowbar by Dweller
      </a>
    </iframe>
    <iframe style={{
        border: '0',
        width: '500px',
        height: '472px',
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=1559208815/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://dwellermusic.bandcamp.com/album/aquarium">
        Aquarium by Dweller
      </a>
    </iframe>
    <iframe style={{
        border: '0',
        width: '500px',
        height: '472px',
      }}
      src="https://bandcamp.com/EmbeddedPlayer/album=4021454801/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=small/transparent=true/"
      seamless
    >
      <a href="http://dwellermusic.bandcamp.com/album/dweller-2">
        Dweller by Dweller
      </a>
    </iframe>
  </Layout>
)

export default IndexPage;
