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
  return (
    <div>
      {postCreateType == 'Testimoney' ||
        (postCreateType == '' && (
          <div>
            <PostCreateModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              createPost={createPost}
              postCallAction={postCallAction}
            />
          </div>
        ))}
      {postCreateType == 'Image' && (
        <div>
          <PCImageModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
      {postCreateType == 'documents' && (
        <div>
          <PCTestimoneyModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
      {postCreateType == 'declaration' && (
        <div>
          <PCTestimoneyModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
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
