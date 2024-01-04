import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col md={3}>
            <div className="logo">
              <Link to={"/"}>
                <img
                  className="brand-logo"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211"
                  alt=""
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
