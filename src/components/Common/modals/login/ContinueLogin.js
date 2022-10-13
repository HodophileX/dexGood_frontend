import React from 'react';

import PropType from 'prop-types';
import ReactModal from 'react-modal';
import CrossIcon from '../../../../assets/svg/close.svg';
const ContinueLogin = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      ariaHideApp={false}
      overlayClassName="f-modal-overlay"
      shouldCloseOnOverlayClick={true}
      className="post-modal w-[90%] px-2 md:w-[35%] md:h-auto"
    >
      <div className="flex text-black flex-col">
        <div className="w-full border-b-[1px] flex justify-center items-center pb-2">
          <div className="flex text-start w-full h5-thin">Write your deed</div>
          <div
            className="hover:text-slate-700 flex justify-center items-center px-3 py-1 hover:bg-blue-100 rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            close
            <img className="w-5 ml-auto mt-1 " src={CrossIcon}></img>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ContinueLogin;
ContinueLogin.propTypes = {
  isModalOpen: PropType.bool,
  setIsModalOpen: PropType.func,
};
