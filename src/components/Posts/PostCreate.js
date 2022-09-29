import React, { useState } from 'react';
import { DefaultButton } from '../Common/Buttons/DefaultButton';
import PostCreateModal from '../Common/modals/PostCreateModal';
import ProfileImage from '../../Image/Profile/1.png';
const PostCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonsTitle = [
    { title: 'Image', color: 'bg-orange-400' },
    { title: 'Testimoney', color: 'bg-pink-400' },
    { title: 'documents', color: 'bg-red-400' },
    { title: 'declaration', color: 'bg-blue-400' },
  ];
  return (
    <div className="w-full h-auto backdrop-blur-sm bg-[#ced5dc] rounded-sm py-4">
      <div className="w-full">
        <div className="mx-4 px-2">
          <div className="relative w-full flex items-center ">
            <div className="w-10 h-10 rounded-full  bg-[#eef0f2] shadow-sm shadow-slate-900 ">
              <img src={ProfileImage} />
            </div>
            <div className="flex w-full justify-between">
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
          <div className="py-2 ">
            <div className="flex justify-evenly">
              {buttonsTitle.map((button, index) => (
                <div className="mx-[1px]">
                  <DefaultButton
                    title={button.title}
                    key={index}
                    backgroundColor={button.color}
                  />
                </div>
              ))}
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
