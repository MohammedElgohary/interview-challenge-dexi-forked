import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>Solutions</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/one">Task One</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/two">Task Two</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/three">Task Three</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
