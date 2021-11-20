import React, { Fragment, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  NavLink,
  Button,
} from "reactstrap";

//Images
import logo from "../Assets/Images/Header/logo.jpg";

//Styles
import "../Assets/Styles/CSS/nav.css";

const NavB = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <Fragment>
      <Navbar expand="md" light className="navbar">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Collapse isOpen={open} navbar style={{ justifyContent: "end" }}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Category</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">FAQs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">My Cart</NavLink>
            </NavItem>
            <NavItem>
              <Button className="nav-btn">Login</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavB;
