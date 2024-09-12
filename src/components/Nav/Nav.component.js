import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./nav.style.scss";

function NavComponent() {
  const loginSelector = useSelector((state) => state.login?.success);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Nav className="me-auto">
            <Link to={"/"}>Login</Link>
            {loginSelector && <Link to={"/users"}>User</Link>}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
