import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCreate from '../../components/Posts/PostCreate';
import PostsContent from '../../components/Posts/PostsContent';
import { getPostAction } from '../../_redux/action/posts';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  const user = useSelector(state => state.user.user);

  const posts = useSelector(state => state.post.post);

  return (
    <div className="relative h3-thin flex flex-col justify-start min-h-screen bg-[#b3b4bf]">
      <div className="z-10 mx-2 md:mx-10">
        {!posts && (
          <div className="p-[1px] bg-blue-800  mt-10  rounded-md shadow-lg shadow-blue-500/50">
            <div className="w-full h-40 bg-blue-500 rounded-md">
              <div className="h2-thin flex justify-center items-center h-full">
                Write your first deed
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 flex justify-start items-center mx-2 md:mx-20 md:px-14 wrap "></div>
        <div className="mt-6 flex justify-evenly mx-2 md:mx-10 ">
          <div className=" flex flex-col items-center">
            <div className="w-[40vw] mx:w-[30vw] mb-6">
              <PostCreate />
            </div>
            <div className="w-full md:w-[40vw] mb-4">
              {posts &&
                posts.map((post, index) => {
                  return <PostsContent post={post} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
