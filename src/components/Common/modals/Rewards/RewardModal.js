import React from 'react';
import Modal from 'react-modal';
import Proptypes from 'prop-types';
import { CloseIcon } from '../../../../assets/svg/close';
import { AwardIcon, BellIcon } from '../../svg/icon';
const RewardModal = ({ isModalOpen, setIsModalOpen, points = 0 }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        overlayClassName="f-modal-overlay"
        shouldCloseOnOverlayClick={true}
        className="post-modal w-[90%] px-2 md:w-[35%] md:h-auto text-black "
      >
        <div className="text-black">
          <div className="flex justify-end items-center">
            <div
              className="hover:text-slate-700  px-3 py-1 hover:bg-blue-100 rounded-md cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="w-20">
              <AwardIcon />
            </div>
            <div className="h4-thin h4-sm-thin font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
              Congratulations
            </div>
          </div>
          <div className="flex justify-center items-center text-center">
            You Got
            <span className="h4-thin h4-sm-thin mx-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
              {points}
            </span>
            plexus Point
          </div>
          <div className="flex justify-end items-center">
            <div className="w-6">
              <BellIcon />
            </div>
            <div className="caption cursor-pointer hover:font-semibold">
              use of points
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RewardModal;
RewardModal.propTypes = {
  isModalOpen: Proptypes.bool,
  setIsModalOpen: Proptypes.func,
  points: Proptypes.number,
};
