import React from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";

const BrandModal = ({ show, onHide }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
        <ModalHeader closeButton>Create Brand</ModalHeader>

        <ModalBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eaque
          blanditiis illum tempora dignissimos totam doloribus eos non itaque
          qui.
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BrandModal;
