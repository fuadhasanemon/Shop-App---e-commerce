import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createBrand } from "../../redux/shop/actions";

const BrandModal = ({ show, onHide }) => {
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);

  const dispatch = useDispatch();

  const handleLogoUpload = e => {
    setLogo(e.target.files[0]);
  };

  const handleCreateBrand = async e => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("brand-photo", logo);

    try {
      // Assuming createBrand is an asynchronous function
      dispatch(createBrand({ form_data }));

      // Close the modal and reset modal after successful brand creation
      onHide();
      e.target.reset();
      setInput("");
      setLogo(null);
    } catch (error) {
      console.error("Error creating brand:", error);
      // Handle the error as neededs
    }
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <ModalHeader closeButton>Add new brand</ModalHeader>

        <ModalBody>
          <Form onSubmit={handleCreateBrand}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                value={input}
                onChange={e => setInput(e.target.value)}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLogo">
              <Form.Label>Brand Logo</Form.Label>
              <Form.Control onChange={handleLogoUpload} type="file" />

              <br />

              {logo && (
                <img width={"100%"} src={URL.createObjectURL(logo)} alt="" />
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BrandModal;
