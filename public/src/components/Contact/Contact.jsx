import React from 'react';
import NavBar from '../NavBar/NavBar';
import FooterComponent from '../Footer/FooterComponent';
import { Jumbotron } from 'react-bootstrap';


const Contact = (props) => (
  <div>
    <NavBar props={props}/>
    <div className="contact-body">
      <Jumbotron>
        <h5 className="contact-header">Green Road Capital</h5>
        <p>
          <div className="contact-content">
            <p>
              <span className="fa fa-handshake-o" aria-hidden="true" /> 9010 Corbin Ave., Suite 5C
            </p>
            <p>Northridge, CA 91324</p>
          </div>
          <div className="contact-content">
            <p>
              <span className="fa fa-phone" aria-hidden="true"></span> (818) 527-5122
            </p>
          </div>
          <div className="contact-content"><span className="fa fa-envelope-open-o" aria-hidden="true"></span> <a href="mailto:info@greenroadcapital.net" target="_top">info@greenroadcapital.net</a></div>
        </p>
      </Jumbotron>
    </div>
    <FooterComponent props={props}/>
  </div>
);

export default Contact;
