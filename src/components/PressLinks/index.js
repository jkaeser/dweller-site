import React from "react";

import './PressLinks.css';

const PressLinks = ({ links }) => (
  <div class="PressLinks">
    { links.map(link => (
      <p>
        <time datetime={ link.date }>{ link.date }</time>
        {link.active &&
          <a href={ link.url }>{ link.url }</a>
        }
        {!link.active &&
          <strike>{link.url}</strike>
        }
      </p>
    )) }
  </div>
)

export default PressLinks;
