import React from 'react';
import { TbEdit } from 'react-icons/tb';

const PostsContent = () => {
  // const [onModal, setOnModal] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <div className="w-full backdrop-blur-sm bg-white/30  shadow-2xl shadow-[#414f5cac] rounded-lg">
      <div className="">
        <div className=" mx-10 px-2">
          <div className=" relative w-full flex items-center py-2">
            <div className="w-16 h-14 rounded-full  bg-slate-700 shadow-sm shadow-slate-900 "></div>
            <div className="flex w-full py-2 justify-between">
              <div className="ml-3">
                <div className="flex h6-thin h6-sm-thin text-orange-600 font-bold">
                  username
                </div>
                <div className="body-2 flex text-start text-[#00000067]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="body-1">
                <div className="p-3 rounded-full  hover:bg-[#A1A1E1] cursor-pointer">
                  <TbEdit className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className=" py-3 ">
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
