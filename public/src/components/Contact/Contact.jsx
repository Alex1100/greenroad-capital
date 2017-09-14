import React from 'react';
import NavBarContact from '../NavBar/NavBarContact';
import FooterComponentContact from '../Footer/FooterComponentContact';
import { Jumbotron } from 'react-bootstrap';
import MediaQuery from 'react-responsive';


const Contact = (props) => (
  <div>
    <NavBarContact props={props}/>
    <MediaQuery query='(max-device-width: 414px)'>
        <MediaQuery query='(min-device-width: 400px)'>
          <MediaQuery query='(min-device-height: 736px)'>
            <div className="layout-logo-iphone-six-plus">
              <img className="layout-logo-image-iphone-six-plus" src="../../.././assets/images/Green_Road_Capital_Logo_New_Iphone_Six_Plus.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 376px)'>
        <MediaQuery query='(min-device-width: 370px)'>
          <MediaQuery query='(max-device-height: 668px)'>
            <div className="layout-logo-iphone-six">
              <img className="layout-logo-image-iphone-six" src="../../.././assets/images/Green_Road_Capital_Logo_New_Iphone_Six.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 320px)'>
        <MediaQuery query='(min-device-width: 315px)'>
          <MediaQuery query='(max-device-height: 568px)'>
            <div className="layout-logo-iphone-five">
              <img className="layout-logo-image-iphone-five" src="../../.././assets/images/Green_Road_Capital_Logo_New_Iphone_Five.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 412px)'>
        <MediaQuery query='(min-device-width: 411px)'>
          <MediaQuery query='(min-device-height: 732px)'>
            <div className="layout-logo-nexus-six-p-and-five-x">
              <img className="layout-logo-image-nexus-six-p-and-five-x" src="../../.././assets/images/Green_Road_Capital_Logo_New_Nexus_Six_P_And_Five_X.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 361px)'>
        <MediaQuery query='(min-device-width: 357px)'>
          <MediaQuery query='(min-device-height: 341px)'>
            <div className="layout-logo-galaxy-s-five">
              <img className="layout-logo-image-galaxy-s-five" src="../../.././assets/images/Green_Road_Capital_Logo_New_Galaxy_S_Five.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 768px)'>
        <MediaQuery query='(min-device-width: 760px)'>
          <MediaQuery query='(max-device-height: 1024px)'>
            <div className="layout-logo-ipad">
              <img className="layout-logo-image-ipad" src="../../.././assets/images/Green_Road_Capital_Logo_New_Ipad.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1024px)'>
        <MediaQuery query='(min-device-width: 1020px)'>
          <MediaQuery query='(max-device-height: 1366px)'>
            <div className="layout-logo-ipad-pro">
              <img className="layout-logo-image-ipad-pro" src="../../.././assets/images/Green_Road_Capital_Logo_New_Ipad_Pro.jpeg" />
            </div>
          </MediaQuery>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 1200px)'>
        <MediaQuery query='(max-device-width: 1290px)'>
          <div className="layout-logo">
            <img className="layout-logo-image" src="../../.././assets/images/Green_Road_Capital_Logo_New_Default.jpeg" />
          </div>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 1300px)'>
        <MediaQuery query='(max-device-width: 1700px)'>
          <div className="layout-logo-fifteen-inch">
            <img className="layout-logo-image-fifteen-inch" src="../../.././assets/images/Green_Road_Capital_Logo_New_Default_Fifteen_Inch_Screen.jpeg" />
          </div>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(min-device-width: 1700px)'>
        <div className="layout-logo-twenty-seven-inch">
          <img className="layout-logo-image-twenty-seven-inch" src="../../.././assets/images/Green_Road_Capital_Logo_New_Twenty_Seven_Inch.jpg" />
        </div>
      </MediaQuery>
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
    <FooterComponentContact props={props}/>
  </div>
);

export default Contact;
