import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((err) => console.error(err));
  };
  // console.log(user);
  return (
    <div>
      <Navbar
        className="mb-5"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container fluid>
          <Navbar.Brand className="text-primary fw-bold me-md-5  px-1 rounded-2 shadow-sm cursor-pointer btn border-0">
            <Link to="/" className="text-decoration-none">
              <button className="btn btn-primary fw-bold ">News</button>{" "}
              Sunshine
            </Link>
          </Navbar.Brand>
          {/* only for small device nav start */}
          <Nav className="d-md-none">
            <div>
              <Nav.Link className="text-danger fw-semibold" eventKey={2}>
                {user?.uid ? (
                  <span>{user?.displayName}</span>
                ) : (
                  <div>
                    <Link className="me-2 text-decoration-none " to="/login">
                      Login
                    </Link>
                    <Link
                      className="ms-sm-1 text-decoration-none"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </Nav.Link>
            </div>
          </Nav>
          <Nav className="d-md-none">
            <div>
              {user?.uid ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </div>
          </Nav>
          {/* only for small device nav end */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <div className=" d-lg-none">
                <LeftSideNav></LeftSideNav>
              </div>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <Button onClick={handleLogOut} variant="dark" className="me-2">
                  <Link className="text-decoration-none fw-semibold text-light">
                    Log Out
                  </Link>
                </Button>
              ) : undefined}
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link
                className="text-danger fw-bold d-none d-md-block "
                eventKey={2}
              >
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                  </>
                ) : (
                  <div>
                    <Link className="px-lg-3 text-decoration-none " to="/login">
                      Login
                    </Link>
                    <Link
                      className="px-lg-3  text-decoration-none"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </Nav.Link>
            </Nav>
            <Nav>
              <div className="d-none d-md-block">
                {user?.uid ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
