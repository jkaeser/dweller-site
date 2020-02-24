import React from 'react'

import './footer.css'

const Footer = () => (
  <footer className="footer layout__footer">
    <div class="copyright">
      © {new Date().getFullYear() } Dweller
    </div>
  </footer>
)

export default Footer;
