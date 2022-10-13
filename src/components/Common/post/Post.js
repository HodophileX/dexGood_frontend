import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PopupStatus } from '../Buttons/PopupStatus';
import { ThreeDotIcon } from '../svg/icon';

const Post = ({ post }) => {
  const [editEnable, setEditEnable] = useState(false);
  const user = useSelector(state => state.user.user);
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
                <p className="body-2 flex text-start text-[#00000067]">
                  {post && post.context}
                </p>
              </div>

              <div className="body-1 flex justify-center items-center ">
                <div className="p-1 rounded-sm flex justify-center items-center  hover:bg-[#d3d3d3] cursor-pointer group relative ">
                  <ThreeDotIcon className="flex justify-center items-center" />
                  <PopupStatus title="Edit" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 flex relative w-full">
            <div className="p-2 h6-thin flex w-[95%]">
              <div className="w-full h6-thin flex justify-start text-start py-2">
                {post && post.context}
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="w-4 h-4 rounded-full bg-black "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
