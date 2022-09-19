import React from 'react';
import PropType from 'prop-types';
import ReactModal from 'react-modal';
import CrossIcon from '../../../assets/svg/close.svg';
import { SubmitButton } from '../Buttons/SubmitButton';
const PostCreateModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      ariaHideApp={false}
      overlayClassName="f-modal-overlay"
      shouldCloseOnOverlayClick={true}
      className="post-modal w-[90%] px-2 md:w-[35%] md:h-auto"
    >
      <div>
        <div className="flex text-black flex-col">
          <div className="w-full border-b-[1px] border-slate-400 flex justify-center items-center pb-2">
            <div className="flex text-center justify-center items-center w-full">
              Write your deed
            </div>
            <img
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="w-5 ml-auto mt-1 cursor-pointer"
              src={CrossIcon}
            ></img>
          </div>
          <div className="w-full flex justify-start flex-col  items-start">
            <div>username</div>
            <textarea
              className="flex items-start text-start px-2 py-1 w-full min-h-40 h-40"
              placeholder="What you did? "
              aria-setsize={false}
              onGotPointerCapture={false}
            ></textarea>
            <div className="flex my-2">
              <div className="h6-thin px-1">Verify</div>
              <input
                type="email"
                className="w-full text-start px-2 border-0"
                placeholder="verification email"
              ></input>
            </div>
            <div className="w-full">
              <SubmitButton title="Post" />
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default PostCreateModal;
PostCreateModal.propTypes = {
  isModalOpen: PropType.bool,
  setIsModalOpen: PropType.func,
};
