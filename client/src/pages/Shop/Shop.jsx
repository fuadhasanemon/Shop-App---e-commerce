import React from "react";
import "./shop.scss";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../components/Product/Product";
import SideBar from "../../components/SideBar/SideBar";

const Shop = () => {
  return (
    <section className="shop-page my-5">
      <Container>
        <Row>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>
            <Row>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Shop;
