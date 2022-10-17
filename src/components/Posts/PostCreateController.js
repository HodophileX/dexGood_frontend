import React from 'react';
import PropType from 'prop-types';
import PCTestimoneyModal from '../Common/modals/post/PCTestimoneyModal';
import PostCreateModal from '../Common/modals/post/PostCreateModal';
import PCImageModal from '../Common/modals/post/PCImageModal';
import { useDispatch } from 'react-redux';
import { createPostAction, getPostAction } from '../../_redux/action/posts';

const PostCreateController = ({
  isModalOpen,
  setIsModalOpen,
  postCreateType,
}) => {
  const dispatch = useDispatch();
  const createPost = (data, cb) => {
    dispatch(createPostAction(data, cb));
  };

  const postCallAction = () => {
    dispatch(getPostAction());
  };
  console.log(postCreateType);
  return (
    <div>
      {(postCreateType == 'Testimoney' || postCreateType == 'Empty') && (
        <PostCreateModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          createPost={createPost}
          postCallAction={postCallAction}
        />
      )}
      {postCreateType == 'Image' && (
        <div>
          <PCImageModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
      {postCreateType == 'documents' && (
        <PCTestimoneyModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {postCreateType == 'declaration' && (
        <PCTestimoneyModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default PostCreateController;
PostCreateController.propTypes = {
  isModalOpen: PropType.bool,
  setIsModalOpen: PropType.func,
  postCreateType: PropType.string,
};
