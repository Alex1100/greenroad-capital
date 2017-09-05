import React from 'react';
import { Footer } from 'react-materialize';
import { Link } from 'react-router-dom';

const FooterComponent = props => (
  <div>
    <Footer copyrights="©2017. Green Road Capital, LLC. All rights reserved."
      links={
        <ul>
          <li><Link to="/about" className="blue-text text-lighten-4">About</Link></li>
          <li><Link to="/contact" className="blue-text text-lighten-4">Contact</Link></li>
        </ul>
      }
    >
        <h5 className="blue-text text-lighten-4">Green Road Capital</h5>
        <p className="blue-text text-lighten-4">
          <div><span className="fa fa-handshake-o" aria-hidden="true" /> 9010 Corbin Ave., Suite 5C
          Northridge, CA 91324</div>
          <div><span className="fa fa-phone" aria-hidden="true"></span> (818) 527-5122</div>
          <div><span className="fa fa-envelope-open-o" aria-hidden="true"></span> info@greenroadcapital.net</div>
        </p>
    </Footer>
  </div>
);

export default FooterComponent;
