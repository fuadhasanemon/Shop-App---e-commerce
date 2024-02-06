import React, { useEffect, useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createTag, updateTag } from "../../redux/shop/actions";

const TagModal = ({ show, onHide, setModal, type, dataId }) => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({
    name: ""
  });

  const dispatch = useDispatch();
  const { tags } = useSelector(state => state.shop);

  const handleCreateTag = async e => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);

    console.log("type of form data", typeof form_data);

    try {
      dispatch(createTag({ form_data }));

      // Close the modal and reset modal after successful tag creation
      onHide();
      e.target.reset();
      setInput("");
    } catch (error) {
      console.error("Error creating tag:", error);
      // Handle the error as neededs
    }
  };

  const editData = tags.find(data => data._id === dataId);

  useEffect(() => {
    setEdit(editData);
  }, [dataId, editData]);

  const handleModalOnHide = () => {
    onHide();
  };

  const handleUpdateTag = async e => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", edit?.name);

    try {
      dispatch(updateTag({ data: form_data, id: dataId, setModal }));
      onHide();
      e.target.reset();
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  if (type === "create") {
    return (
      <div>
        <Modal show={show} onHide={handleModalOnHide} centered>
          <ModalHeader closeButton>Add new tag</ModalHeader>

          <ModalBody>
            <Form onSubmit={handleCreateTag}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tag Name</Form.Label>
                <Form.Control
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  } else if (type === "edit") {
    return (
      <div>
        <Modal show={show} onHide={onHide} centered>
          <ModalHeader closeButton>Update tag</ModalHeader>

          <ModalBody>
            <Form onSubmit={handleUpdateTag}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tag Name</Form.Label>
                <Form.Control
                  value={edit?.name}
                  onChange={e =>
                    setEdit(prevState => ({
                      ...prevState,
                      name: e.target.value
                    }))
                  }
                  type="text"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
};

export default TagModal;
