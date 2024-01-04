import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
    <nav className="menu">
      <Container>
        <Row>
          <Col>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              <li>
                <NavLink to={"/admin"}>Admin</NavLink>
              </li>

              <li>
                <NavLink to={"/wish"}>Wish List</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default NavBar;
