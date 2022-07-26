import React from 'react';
import Modal from 'react-modal';
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
const PostSetting = ({ isModal, onToggleModal }) => {
  return (
    <div>
      {/* <Modal
        isOpen={isModal}
        onRequestClose={onToggleModal}
        ariaHideApp={false}
        style={customStyles.content}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div>modal</div>
      </Modal> */}
    </div>
  );
};

export default PostSetting;
