import React from 'react';
import PropType from 'prop-types';
import ReactModal from 'react-modal';
import { SubmitButton } from '../../Buttons/SubmitButton';
import { CloseIcon } from '../../../../assets/svg/close';
import { ImageUploadLink } from '../../../../util/ImageUpload';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
const schema = yup.object().shape({
  context: yup.string().required(),
});
/*eslint-disable*/
const PCImageModal = ({
  isModalOpen,
  setIsModalOpen,
  createPost,
  postCallAction,
}) => {
  const user = useSelector(state => state.user.user);
  const [ImageSelectedUrl, setImageSelectedUrl] = useState(undefined);
  const [file, setFile] = useState(undefined);
  const formik = useFormik({
    initialValues: {
      context: undefined,
      type: 'IMAGE',
    },
    validationSchema: schema,
    onSubmit: val => {
      const body = {
        context: val.context,
        thumbnail: ImageSelectedUrl,
        type: val.type,
      };

      createPost(body, postCallAction);
      setIsModalOpen(false);
    },
  });
  const onImageChange = async e => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFile(fileReader.result);
      ImageUploadLink(user, fileReader.result, e.target.files[0].type).then(
        res => {
          setImageSelectedUrl(res);
        }
      );
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };
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
          <div className="w-full flex justify-start flex-col  items-start border-2 ">
            {file && (
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={file}
                  alt="post image"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <textarea
              className="flex items-start text-start px-2 py-1 w-full min-h-20 outline-none h6-thin resize-none"
              placeholder="What you do?&#x270E; "
              name="context"
              draggable={false}
              value={formik.values.context || ''}
              onChange={formik.handleChange}
              aria-setsize={false}
            ></textarea>
            <input
              type="file"
              placeholder="image select"
              name="postImage"
              alt="submit"
              accept="image/*"
              onChange={e => onImageChange(e)}
              className="w-full h-6 my-4"
            />
            <button className="w-full" type="submit">
              <SubmitButton title="Post" />
            </button>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};

export default PCImageModal;
PCImageModal.propTypes = {
  isModalOpen: PropType.bool,
  setIsModalOpen: PropType.func,
  postCallAction: PropType.func,
};
