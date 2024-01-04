import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./productViewModal.scss";

const ProductViewModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Product quick view</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="product-quick-view">
          <div className="product-photo">
            <img
              src="https://waltonbd.com/image/catalog/home-page/half-block/nexg-n6-block.jpg"
              alt=""
            />
          </div>

          <div className="product-details">
            <h4 className="my-3">Walton 12</h4>
            <hr />
            <div className="view-pricing">
              <span className="regular">$12000</span>
              <span className="sale">$11000</span>
            </div>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              ullam.
            </p>
            <Button className="cart-btn">Add to cart</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductViewModal;
