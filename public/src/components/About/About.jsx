import React from 'react';
import NavBarAbout from '../NavBar/NavBarAbout';
import FooterComponentAbout from '../Footer/FooterComponentAbout';
import { Jumbotron } from 'react-bootstrap';
import MediaQuery from 'react-responsive';


const About = (props) => (
  <div>
    <NavBarAbout props={props} />
    <Jumbotron>
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
        <div className="layout-logo">
          <img className="layout-logo-image" src="../../.././assets/images/Green_Road_Capital_Logo_New_Default_Fifteen_Inch_Screen.jpeg" />
        </div>
      </MediaQuery>
      <div className="shadow">
        <p>Green Road Capital, LLC was founded
          in 2017 and is based in Los Angeles, CA.
          Green Road Capital is led by an
          institutionally seasoned management
          team with 13+ years of combined
          experience managing institutional
          accounts, 22+ years in trading with the
          same fluid strategy using a proprietary
          trading formula, and 40+ years of
          offering diversification benefits not
          seen in traditional equity, debt, and
          alternative investments.
        </p>
        <p>Green Road Capital is committed to
          delivering transparent alternative
          investment solutions to sophisticated
          high-net worth investors
          and institutions seeking uncorrelated
          returns and above-average profit
          participation.
        </p>
      </div>
      <div className="disclosure">
        <p>
          <sub>Access to this website is provided by Green Road Capital, LLC ("Green Road") for informational purposes only. The publication of this website is limited to the dissemination of general information pertaning to the services offered by Green Road. No portion of the commentary included herin is to be construed as a solicitation to effect transactions in securities or the provision of personalized investment, tax, or legal advice. There is no guarantee that active asset management or any investment strategy will be successful. Investing involves risk, including the potential loss of principal. No investment strategy can guarantee a profit or protect against loss in periods of declining values. Past performance is not necessarily indicative of future results. The forward-looking statements contained on this website are included for illustrative purposes only, are inherently spculative as they relate to future events, and may not be realized as described. These forward-looking statements will not be updated in the future. Opinions expressed herein are made as of the date of publication and are subject to change without notice. Data and other source information presented on this website were obtained from published sources believed to be reliable, but which are not warranted as to accuracy or completeness. No part of this website may be reproduced in any manner without the written permission of Green Road Capital, LLC.</sub>
        </p>
      </div>
    </Jumbotron>
    <FooterComponentAbout props={props} />
  </div>
);

export default About;
