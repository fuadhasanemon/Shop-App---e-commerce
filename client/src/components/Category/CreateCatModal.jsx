import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/shop/actions";

const CreateCatModal = ({ show, onHide }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleCategoryImage = e => {
    setImage(e.target.files[0]);
  };

  const handleCreateCategory = e => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", name);
    form_data.append("category-photo", image);

    try {
      dispatch(createCategory({ form_data }));

      // Close the modal and reset modal after successful brand creation
      onHide();
      e.target.reset();
      setName("");
      setImage(null);
    } catch (error) {
      console.error("Error creating brand:", error);
      // Handle the error as neededs
    }
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <ModalHeader closeButton>Add new Category</ModalHeader>

        <ModalBody>
          <Form onSubmit={handleCreateCategory}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLogo">
              <Form.Label>Category Logo</Form.Label>
              <Form.Control onChange={handleCategoryImage} type="file" />

              <br />

              {image && (
                <img width={"100%"} src={URL.createObjectURL(image)} alt="" />
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

export default CreateCatModal;
