import React from 'react';
import { Footer } from 'react-materialize';
import { Link } from 'react-router-dom';

const FooterComponentAC = props => (
  <div>
    <Footer id="footer-responsive-ac" copyrights="©2017. Green Road Capital, LLC. All rights reserved."
      links={
        <ul>
          <li><Link to="/" className="footer-content" onClick={() => props.history.push('/')}>Home</Link></li>
          <li><Link to="/" className="footer-content" onClick={() => props.history.push('/about')}>About</Link></li>
          <li><Link to="/contact" className="footer-content" onClick={() => props.history.push('/contact')}>Contact</Link></li>
        </ul>
      }
    >
        <h5 className="footer-header">Green Road Capital</h5>
        <p>
          <div className="footer-content"><span className="fa fa-handshake-o" aria-hidden="true" /> 9010 Corbin Ave., Suite 5C
          Northridge, CA 91324</div>
          <div className="footer-content"><span className="fa fa-phone" aria-hidden="true"></span> (818) 527-5122</div>
          <div className="footer-content"><span className="fa fa-envelope-open-o" aria-hidden="true"></span> <a href="mailto:info@greenroadcapital.net" target="_top">info@greenroadcapital.net</a></div>
        </p>
    </Footer>
  </div>
);

export default FooterComponentAC;
