import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal, content }) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <button onClick={closeModal}>Close Modal</button>
        <div>{content}</div>
      </Modal>
    );
  };

export default ModalComponent;