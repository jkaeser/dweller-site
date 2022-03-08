import React from 'react'

import './footer.css'

const Footer = () => (
  <footer className="footer layout__footer">
    <div className="copyright">
      © {new Date().getFullYear() } Dweller
    </div>
  </footer>
)

export default Footer;
