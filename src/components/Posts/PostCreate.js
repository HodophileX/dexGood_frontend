import React, { useState } from 'react';
import { DefaultButton } from '../Common/Buttons/DefaultButton';
import ProfileImage from '../../Image/Profile/1.png';
import PostCreateController from './PostCreateController';
const PostCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postCreateType, setPostCreateType] = useState('');
  const buttonsTitle = [
    { title: 'Image', color: 'bg-orange-400' },
    { title: 'Testimoney', color: 'bg-pink-400' },
    { title: 'documents', color: 'bg-red-400' },
    { title: 'declaration', color: 'bg-blue-400' },
  ];
  const openModal = type => {
    setPostCreateType(type);
    setIsModalOpen(true);
  };
  return (
    <div className="w-full bg-white text-black py-4 rounded-md shadow-lg">
      <div className="w-full ">
        <div className="mx-2 md:mx-4 px-2">
          <div className="relative w-full flex items-center ">
            <div className="w-10 h-10 rounded-full  bg-[#eef0f2] shadow-sm shadow-slate-900 ">
              <img src={ProfileImage} />
            </div>
            <div className="flex w-full justify-between">
              <div className="ml-3 w-full">
                <div className="w-full body-2 flex text-start">
                  <div className="py-4 w-full flex h-auto">
                    <input
                      className="w-full text-start rounded-sm text-black px-2 py-2 caption border-[1px] border-black placeholder-[#888]"
                      placeholder="write your today's deed"
                      onClick={() => openModal('Empty')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 ">
            <div className="flex justify-evenly">
              {buttonsTitle.map((button, index) => (
                <div className="">
                  <DefaultButton
                    title={button.title}
                    key={index}
                    action={() => openModal(button.title)}
                    backgroundColor={button.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <PostCreateController
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          postCreateType={postCreateType}
        />
      )}
    </div>
  );
};

export default PostCreate;
