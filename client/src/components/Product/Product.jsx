import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./product.scss";
import ProductViewModal from "../ProducrViewModal/ProductViewModal";

const Product = () => {
  const [show, setShow] = useState(false);

  return (
    <Col md={4}>
      <div className="product-item mb-4">
        <ProductViewModal show={show} onHide={() => setShow(false)} />

        <Card>
          <Card.Img src="https://waltonbd.com/image/catalog/home-page/half-block/nexg-n6-block.jpg"></Card.Img>
          <Card.Body>
            <Card.Title>Walton 12</Card.Title>
            <div className="pricing my-2">
              <span className="regular">$12000</span>
              <span className="sale">$11000</span>
            </div>

            <div className="product-button">
              <Button className="cart-btn" variant="primary">
                Add to cart
              </Button>
              &nbsp;
              <Button variant="info" onClick={() => setShow(true)}>
                View
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Product;
