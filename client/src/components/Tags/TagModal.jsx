import React, { useEffect, useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createTag, updateBrand } from "../../redux/shop/actions";

const BrandModal = ({ show, onHide, setModal, type, dataId }) => {
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);
  const [edit, setEdit] = useState({
    name: "",
    photo: ""
  });

  const dispatch = useDispatch();
  const { tags } = useSelector(state => state.shop);

  const handleLogoUpload = e => {
    setLogo(e.target.files[0]);
  };

  const handleCreateTag = async e => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);

    console.log("form data of tags", form_data);

    try {
      // Assuming createBrand is an asynchronous function
      await dispatch(createTag({ form_data }));

      // Close the modal and reset modal after successful tag creation
      onHide();
      e.target.reset();
      setInput("");
    } catch (error) {
      console.error("Error creating brand:", error);
      // Handle the error as neededs
    }
  };

  const editData = tags.find(data => data._id === dataId);

  useEffect(() => {
    setEdit(editData);
  }, [dataId, editData]);

  const handleModalOnHide = () => {
    onHide();
    setLogo(null);
  };

  const handleUpdateTag = async e => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", edit?.name);
    form_data.append("photo", edit?.photo);
    form_data.append("brand-photo", logo);
    try {
      dispatch(updateBrand({ data: form_data, id: dataId, setModal }));
      onHide();
      e.target.reset();
      setInput("");
      setLogo(null);
    } catch (error) {
      console.log(error);
    }
  };

  if (type === "create") {
    return (
      <div>
        <Modal show={show} onHide={handleModalOnHide} centered>
          <ModalHeader closeButton>Add new brand</ModalHeader>

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

export default BrandModal;
