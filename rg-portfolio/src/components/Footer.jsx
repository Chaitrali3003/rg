import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer">
  
  {/* Top row */}
  <div className="footer-top">
    <div className="footer-left">
      <h2 className="footer-heading">Let's talk!</h2>
      <p className="footer-sub">and explore messy problems with curiosity and care</p>
    </div>
    <div className="footer-right">
      {/* <a href="https://linkedin.com/in/yourprofile" target="_blank"> */}
      LinkedIn ↗
      {/* </a> */}
      {/* <a href="/cv.pdf" download="Reema_Gokhale_CV.pdf"> */}
      CV ↗
      {/* </a> */}
    </div>
  </div>

  {/* Divider */}
  <hr className="footer-divider" />

  {/* Bottom row */}
  <div className="footer-bottom">
    <span>designed by Reema Gokhale</span>
    <span>2026</span>
  </div>

</footer>
    </div>
  )
}

export default Footer
