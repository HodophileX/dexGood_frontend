import React, { useState } from 'react';
import { TbEdit } from 'react-icons/tb';

const PostsContent = () => {
  // const [onModal, setOnModal] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }
  const [editEnable, setEditEnable] = useState(false);

  return (
    <div className="w-full backdrop-blur-sm bg-[#ced5dc] rounded-lg mb-2">
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
                  Headline
                </div>
                <p className="body-2 flex text-start text-[#00000067]">
                  sub headlineLorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
              </div>
              <div
                className="body-1"
                onClick={() => {
                  setEditEnable(true);
                }}
              >
                {editEnable && (
                  <div className="p-3 rounded-full  hover:bg-[#A1A1E1] cursor-pointer">
                    <TbEdit className="w-5 h-5" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" py-3 hidden">
            <div className="p-2 h6-thin flex ">
              <div className="h6-thin flex justify-start text-start py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam aliquam hic minus a qui? Saepe, vel possimus quod quae
                cum corrupti dolores maxime velit hic illo officia praesentium,
                perspiciatis neque, illum fuga odio excepturi nam vero error
                modi dignissimos totam dolorum. Quis doloribus explicabo quae,
                sapiente modi sed non labore id
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsContent;
