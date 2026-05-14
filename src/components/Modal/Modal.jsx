import React from "react";

const Modal = ({ closeModal, content }) => {
  return (
    <div className="modal">
      <h3>{content}</h3>
      <button className="modal-btn" onClick={closeModal}>
        Ok
      </button>
    </div>
  );
};

export default Modal;
