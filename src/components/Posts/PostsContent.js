import React from 'react';

const PostsContent = () => {
  // const [onModal, setOnModal] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <div className="w-full primary-color">
      <div className="rounded-sm shadow-sm shadow-black">
        <div className="border-l-[1px] border-black mx-10 px-2">
          <div className=" relative w-full flex items-center py-2">
            <div className="w-12 h-10 rounded-sm  bg-slate-700 shadow-sm shadow-slate-900 "></div>
            <div className="flex w-full py-2">
              <div className="ml-3">
                <div className="flex h6-thin h6-sm-thin text-orange-600">
                  username
                </div>
                <div className="caption flex text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis exercitationem deserunt voluptates?
                </div>
              </div>
              <div className="caption ml-10 flex justify-end items-center cursor-pointer">
                <div className="p-2 hover:text-orange-600"> edit</div>
              </div>
            </div>
          </div>
          <div className="mx-8 px-2 ">
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
