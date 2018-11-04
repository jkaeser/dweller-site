import React from "react";

var style = {
  border: "none",
  width: "350px",
  height: "853px"
};

const IndexPage = () => (
  <div className="text-center">
    <iframe style={ style } src="https://bandcamp.com/EmbeddedPlayer/album=4021454801/size=large/bgcol=ffffff/linkcol=0687f5/package=4208657613/transparent=true/" seamless><a href="http://dwellermusic.bandcamp.com/album/dweller-2">Dweller by Dweller</a></iframe>
  </div>
);

export default IndexPage;
