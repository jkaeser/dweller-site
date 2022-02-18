import React from "react";

const PressLinks = ({ links }) => (
  <div class="PressLinks">
    { links.map(link => (
      <p>
        [<time datetime={ link.date }>{ link.date }] </time>
        <a href={ link.url }>{ link.url }</a>
      </p>
    )) }
  </div>
)

export default PressLinks;
