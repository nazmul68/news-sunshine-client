import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  return (
    <div>
      <Navbar
        className="mb-5"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand className="fw-bold fst-italic">
            News Sunshine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <div className=" d-lg-none">
                <LeftSideNav></LeftSideNav>
              </div>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">sample 1</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                sample 2
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
