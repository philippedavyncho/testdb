import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
