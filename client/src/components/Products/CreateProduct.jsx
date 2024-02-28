import React from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Row
} from "react-bootstrap";
import { useSelector } from "react-redux";

const CreateProduct = ({ show, onHide }) => {
  const { brands, categories } = useSelector(state => state.shop);

  return (
    <div>
      <div>
        <Modal show={show} onHide={onHide} centered size="lg">
          <ModalHeader closeButton>Add new product</ModalHeader>

          <ModalBody>
            <Form onSubmit="">
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Regular Price</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sale Price</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Short desc</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Long desc</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLogo">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control onChange="" type="file" />

                    <br />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLogo">
                    <Form.Label>Gallery Image</Form.Label>
                    <Form.Control onChange="" type="file" />

                    <br />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Category</Form.Label>
                    <Form.Label>
                      <input type="checkbox" value="" />
                    </Form.Label>
                  </Form.Group>
                </Col>
              </Row>

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
