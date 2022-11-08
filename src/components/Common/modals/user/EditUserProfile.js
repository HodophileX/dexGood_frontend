import React from 'react';
import PropType from 'prop-types';
import ReactModal from 'react-modal';
import { SubmitButton } from '../../Buttons/SubmitButton';
import { userUpdateAction } from '../../../../_redux/action/user';
import { Formik } from 'formik';
import { CloseIcon } from '../../../../assets/svg/close';

const EditUserProfile = ({ isModalOpen, setIsModalOpen }) => {
  const updateProfile = () => {
    userUpdateAction();
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      ariaHideApp={false}
      overlayClassName="f-modal-overlay"
      shouldCloseOnOverlayClick={true}
      className="post-modal w-[90%] px-2 md:w-auto md:h-auto "
    >
      <div className="flex text-black flex-col">
        <div className="w-full border-b-[1px] flex justify-center items-center pb-2">
          <div className="flex text-start w-full h5-thin">
            Edit your profile Details
          </div>
          <div
            className="hover:text-slate-700 flex justify-center items-center px-3 py-1 hover:bg-blue-100 rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            close
            <CloseIcon />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start h6-thin justify-center">
          <div className="my-2 flex justify-center">
            <div className=""> Username:</div>{' '}
            <input placeholder="username" className=" mx-2" />
          </div>
          <div className="my-2">
            Email: <input placeholder="Email" className=" mx-2" />
          </div>
          <div className="flex my-4 ">
            <div className="flex">
              FirstName: <input placeholder="firstname" className="" />
            </div>
            <div className="flex">
              LastName: <input placeholder="firstname" className="" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <SubmitButton title="update details" action={updateProfile} />
        </div>
      </div>
    </ReactModal>
  );
};

export default EditUserProfile;
EditUserProfile.propTypes = {
  isModalOpen: PropType.bool,
  setIsModalOpen: PropType.func,
};
