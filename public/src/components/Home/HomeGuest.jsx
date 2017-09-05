import React from 'react';
import NavBar from '../NavBar/NavBar';
import FooterComponent from '../Footer/FooterComponent';
var Carousel = require('nuka-carousel');
import { Jumbotron } from 'react-bootstrap';

const HomeGuest = (props) => {
  mixins: [Carousel.ControllerMixin];
  return (
    <div>
      <NavBar props={props} />
      <Jumbotron>
        <Carousel className="z-depth-2" decorators={[]} autoplayInterval={5000} easing={"linear"} wrapAround={true} autoplay={true} swiping={true} >
          <div className="carouzel">
            <img className="carouselBack" src="../../.././assets/images/GreenRoadCapitalLogo.png"/>
          </div>
          <div className="carouzel">
            <img className="carouselBack" src="../../.././assets/images/GreenRoadCapitalLogo.png" border="0"/>
          </div>
        </Carousel>
        <div className="shadow">
          <p>Green Road Capital, LLC was founded
            in 2017 and is based in Los Angeles.
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
      </Jumbotron>
      <FooterComponent props={props} />
    </div>
  )
};


export default HomeGuest;
