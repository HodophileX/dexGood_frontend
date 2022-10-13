import React from 'react';
import PostCreate from './PostCreate';
import { useSelector } from 'react-redux';
import Post from '../Common/post/Post';
const PostsContent = () => {
  const posts = useSelector(state => state.post.post);

  return (
    <div className="w-full pt-10">
      <div className=" mx-2 md:mx-10">
        <div className="w-full flex justify-center">
          {posts && posts.length === 0 && (
            <div className="p-[1px] w-full md:w-[65%] mx-2  mb-2 h-48 rounded-md bg-gradient-to-b from-[#010125] via-[#231148] to-[#733b75] hover:scale-[101%] ease-in duration-400">
              <div className="rounded-md p-2">
                <div className="h3-thin text-[#666699] text-white text-start h-full font-bold">
                  <span className="h2-thin h2-sm-thin text-white">Record.</span>{' '}
                  Encourage the world around you by your deed
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" ">
          <div className=" flex flex-col items-center">
            <div className="w-full md:w-[40vw] hover:scale-[101%] ease-in duration-300">
              <PostCreate />
            </div>
            <div className="w-full md:w-[40vw] my-4 ">
              {posts &&
                posts.map((post, index) => {
                  return <Post post={post} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsContent;
