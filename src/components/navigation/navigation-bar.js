import React from 'react';
import { Link, LocationProvider, createHistory } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavigationSearch from './navigation-search-container';
import { TEAM_NAME } from '../../constants';

const displayName = 'NavigationBar';

const NavLink = ({ partial = false, ...props }) => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent, isPartiallyCurrent }) => {
        const isActive = partial ? isPartiallyCurrent : isCurrent;

        return { className: isActive ? 'nav-link active' : 'nav-link' };
      }}
    />
  );
};

const NavigationBar = (props) => {
  const { logo } = props;
  const history = createHistory(window);

  return (
    <LocationProvider>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} height="50" alt={TEAM_NAME} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/players" partial className="nav-link">
              Players
            </NavLink>
            <NavLink to="/stadium" className="stadium">
              Standium
            </NavLink>
          </Nav>
          <NavigationSearch history={history} />
        </Navbar.Collapse>
      </Navbar>
    </LocationProvider>
  );
};

NavigationBar.displayName = displayName;

export default NavigationBar;
