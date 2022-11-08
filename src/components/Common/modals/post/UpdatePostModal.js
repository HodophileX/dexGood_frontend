import React from 'react';
import PropType from 'prop-types';
import ReactModal from 'react-modal';
import { SubmitButton } from '../../Buttons/SubmitButton';
import { CloseIcon } from '../../../../assets/svg/close';
import { useFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  postId: yup.string().required(),
  context: yup.string().required(),
  type: yup.string().required(),
});
const UpdatePostModal = ({ isModalOpen, setIsModalOpen, post }) => {
  const formik = useFormik({
    initialValues: {
      postId: post?._id,
      context: post?.context,
      type: post?.type,
    },
    validationSchema: schema,
    onSubmit: val => {
      createPost(val, postCallAction);
      setIsModalOpen(false);
    },
  });
  return (
    <ReactModal
      isOpen={isModalOpen}
      ariaHideApp={false}
      overlayClassName="f-modal-overlay"
      shouldCloseOnOverlayClick={true}
      className="post-modal w-[90%] px-2 md:w-[35%] md:h-auto"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="flex text-black flex-col">
          <div className="w-full border-b-[1px] flex justify-center items-center pb-2">
            <div className="flex text-start w-full h5-thin">
              Write your deed
            </div>
            <div
              className="hover:text-slate-700 flex justify-center items-center px-3 py-1 hover:bg-blue-100 rounded-md cursor-pointer"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              close
              <CloseIcon />
            </div>
          </div>
          <div className="w-full flex justify-start flex-col  items-start">
            <textarea
              className="flex items-start text-start px-2 py-1 w-full min-h-40 h-60 border-2 outline-none h6-thin resize-none"
              placeholder="What you do?&#x270E; "
              draggable={false}
              aria-setsize={false}
            >
              {post && post.context}
            </textarea>
            {post.verification.verification_status && (
              <div className="flex my-2 border-[1px] border-black w-full rounded-sm">
                <div className="h6-thin px-1 text-center body-2 flex justify-center items-center">
                  Verify
                </div>
                <input
                  type="email"
                  className="w-full text-start px-2 border-l-[1px] my-2 border-black outline-none body-2"
                  placeholder="verification email"
                ></input>
                <div className="p-2 flex justify-center items-center bg-slate-300 hover:bg-[#F26730] cursor-pointer px-4">
                  Verify
                </div>
              </div>
            )}
            <div className="w-full">
              <SubmitButton title="Post" />
            </div>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};

export default UpdatePostModal;
UpdatePostModal.propTypes = {
  isModalOpen: PropType.bool,
  setIsModalOpen: PropType.func,
  post: PropType.object,
};
