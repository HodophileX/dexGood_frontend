import React, { useState } from 'react';
import { DefaultButton } from '../Common/Buttons/DefaultButton';
import PostCreateModal from '../Common/modals/PostCreateModal';

const PostCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-[full] h-auto backdrop-blur-sm bg-[#ced5dc] rounded-lg">
      <div className="w-full">
        <div className=" mx-4 px-2">
          <div className="relative w-full flex items-center ">
            <div className="w-8 h-8 rounded-sm  bg-[#eef0f2] shadow-sm shadow-slate-900 "></div>
            <div className="flex w-full  justify-between">
              <div className="ml-3 w-full">
                <div className="w-full body-2 flex text-start text-[#00000067]">
                  <div className="py-3 w-full flex h-auto">
                    <input
                      className="w-full text-start rounded-sm text-black px-2 py-1 caption border-[1px] border-black"
                      placeholder="write your today's deed"
                      onClick={() => setIsModalOpen(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 border-t-[1px] border-black">
            <div className="flex">
              <DefaultButton title="Image" />
            </div>
          </div>
        </div>
      </div>
      <PostCreateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default PostCreate;
