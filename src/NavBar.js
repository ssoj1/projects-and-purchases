import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

/** Top navigation bar for site. */

function NavBar() {
  return (
    <div>
      <Navbar >
        <Nav className="navbar">
          <NavItem className="navbar-primary">
            <NavLink exact to="/" >Home</NavLink>
          </NavItem>

          <NavItem className="navbar-secondary">
            <NavLink exact to="/add" >Add Item</NavLink>
          </NavItem>

          <NavItem className="navbar-secondary">
            <NavLink to="/purchases" >Purchases</NavLink>
          </NavItem>
          
          <NavItem className="navbar-secondary">
            <NavLink to="/projects" >Projects</NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;