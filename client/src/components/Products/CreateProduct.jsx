import React from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";

const CreateProduct = ({ show, onHide }) => {
  return (
    <div>
      <div>
        <Modal show={show} onHide={onHide} centered>
          <ModalHeader closeButton>Add new product</ModalHeader>

          <ModalBody>
            <Form onSubmit="">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLogo">
                <Form.Label>Product Image</Form.Label>
                <Form.Control onChange="" type="file" />

                <br />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default CreateProduct;
