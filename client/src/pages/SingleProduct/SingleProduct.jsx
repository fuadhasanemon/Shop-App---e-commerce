import React from "react";
import "./singleProduct.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import Product from "../../components/Product/Product";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <Container>
        <Row>
          <Col md={6}>
            <div className="image-wrapper">
              <img
                src="https://waltonbd.com/image/catalog/home-page/half-block/nexg-n6-block.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="product-info">
              <h2>Walton 12</h2>
              <hr />
              <div className="price">
                <span className="regular-price">$12000</span>
                <span className="sale-price">$11000</span>
              </div>
              <hr />
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime necessitatibus doloremque voluptatem! Omnis, ipsam
                  soluta?
                </p>
              </div>
              <span className="stock">20 in stock</span>
              <div className="cart-btn">
                <input type="number" />
                <Button className="cart-button">Add to cart</Button>
                <Button className="wish-button">
                  <AiOutlineHeart />
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mt-5 mb-3">
            <h2>Related product</h2>
          </Col>

          <Col md={12}>
            <div className="related-product">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
