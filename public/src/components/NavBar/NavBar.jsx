import React from 'react';
import { SideNav, Navbar, NavItem } from 'react-materialize';
import { Link, Route } from 'react-router-dom';

const NavBar = (props) => (
  <div>
    <Navbar className="navbar-logged-out" brand={<img src="../../.././assets/images/GreenRoadCapitalLogoNavbar.png" className="top-logo"/>} right>
      <NavItem>
        <Link
          to="/"
          onClick={() => {
            props.history.push('/');
          }}
        >
        </Link>
      </NavItem>

      <NavItem>
        <Link
          to="/about"
          onClick={() => {
            props.history.push('/about');
          }}
        >
          <span className="about-link">About</span>
        </Link>
      </NavItem>

      <NavItem>
        <Link
          to="/contact"
          onClick={() => {
            props.history.push('/contact');
          }}
        >
          <span className="contact-link">Contact</span>
        </Link>
      </NavItem>
    </Navbar>
  </div>
)

export default NavBar;
