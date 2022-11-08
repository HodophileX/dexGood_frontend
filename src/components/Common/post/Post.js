import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PopupStatus } from '../Buttons/PopupStatus';
import UpdatePostModal from '../modals/post/UpdatePostModal';
import { ThreeDotIcon } from '../svg/icon';

const Post = ({ post }) => {
  const [editEnable, setEditEnable] = useState(false);
  const [updatePostModalOpen, IsUpdatePostModal] = useState(false);
  const user = useSelector(state => state.user.user);
  let postProofColor = 'bg-black';
  if (post.type === 'TESTIMONEY') {
    postProofColor = 'bg-green-700 ';
  } else if (post.type === 'IMAGE') {
    postProofColor = 'bg-green-800';
  } else if (post.type === 'CONTEXT') {
    postProofColor = 'bg-green-400';
  }
  return (
    <div className="w-full backdrop-blur-sm bg-[#fbfbfb] rounded-md mb-2">
      <div className="">
        <div className=" mx-2 px-2 ">
          <div className=" relative w-full flex items-center py-2">
            <div className="flex w-full py-2 justify-between">
              <div className="ml-3">
                <div
                  className="flex h6-thin h6-sm-thin text-orange-600 font-bold cursor-pointer"
                  onClick={() => {
                    setEditEnable(!editEnable);
                  }}
                >
                  {user && user.username}
                </div>
                {post && post.thumbnail && (
                  <div className="w-full h-60 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="body-1 flex justify-center items-center ">
                <div
                  className="p-1 rounded-sm flex justify-center items-center  hover:bg-[#d3d3d3] cursor-pointer group relative "
                  onClick={() => IsUpdatePostModal(true)}
                >
                  <ThreeDotIcon className="flex justify-center items-center" />
                  <PopupStatus title="Edit" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 flex relative w-full">
            <div className="p-2 h6-thin flex w-[95%]">
              <div className="w-full h6-thin flex justify-start text-start">
                {post && post.context}
              </div>
            </div>
            <div className="flex justify-end items-end p-2">
              <div className={`w-4 h-4 rounded-full ${postProofColor}`}></div>
            </div>
          </div>
        </div>
      </div>
      {
        <UpdatePostModal
          isModalOpen={updatePostModalOpen}
          setIsModalOpen={IsUpdatePostModal}
          post={post}
        />
      }
    </div>
  );
};

export default Post;
