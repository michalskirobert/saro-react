import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";

const CustomWarningModal = ({ itemName }) => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
  };
  const deleteItem = () => {};
  return (
    <div className={`warning ${isOpen ? "" : "closed"}`}>
      <p className="warning-message">
        Are you sure you want to delete <span>{itemName}</span>?
      </p>
      <div className="btn-container">
        <Button className="btn" variant="light" onClick={() => close()}>
          Cancel
        </Button>
        <Button className="btn" variant="danger" onClick={() => deleteItem()}>
          Delete
        </Button>
        <button className="close" onClick={() => close()}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default CustomWarningModal;
