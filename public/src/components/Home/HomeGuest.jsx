import React from 'react';
import NavBar from '../NavBar/NavBar';
import FooterComponent from '../Footer/FooterComponent';
import { Jumbotron } from 'react-bootstrap';

const HomeGuest = (props) => (
  <div>
    <NavBar props={props} />
    <Jumbotron>
      <div className="layout-logo">
        <img className="layout-logo-image" src="../../.././assets/images/Green_Road_Capital_Logo_New.jpg" />
      </div>
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
          <sub>Access to this website is provided by Green Road Capital, LLC ("Green Road") for informational purposes only. The publication of this website is limited to the dissemination of general information pertaning to the services offered by Green Road. No portion of the commentary included herin is to be construed as a solicitation to effect transactions in securities or the provision of personalized investment, tax, or legal advice. There is no guarantee that active asset management or any investment strategy will be successful. Investing involves risk, including the potential loss of principal. No investment strategy can guarantee a profit or protect against loss in periods of declining values. Past performance is not necessarily indicative of future results. The forward-looking statements contained on this website are included for illustrative purposes only, are inherently spculative as they relate to future events, and may not be realized as described. These forward-looking statements will not be updated in the future. Opinions expressed herein are made as of the date of publication and are subject to change without notice. Data and other source information presented on this website were obtained from published sources believed to be reliable, but which are not warranted as to accuracy or completeness. No part of this website may be reproduced in any manner without the written permission of Green Road.</sub>
        </p>
      </div>
    </Jumbotron>
    <FooterComponent props={props} />
  </div>
);


export default HomeGuest;
