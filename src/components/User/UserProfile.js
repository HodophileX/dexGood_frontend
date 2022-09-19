import React from 'react';
import PostsContent from '../Posts/PostsContent';
import Details from './Details';
import UserFields from './UserFields';

const UserProfile = () => {
  return (
    <div className="w-full ">
      <div className="border-b-[1px] border-black">
        <UserFields />
      </div>
      <div className="flex justify-center mx-2 md:mx-80">
        <div className="w-full hidden md:flex">
          <Details />
        </div>
        <div className="w-[100vw] mt-2 flex p-2 ">
          <div>
            <PostsContent />
            <PostsContent />
            <PostsContent />
            <PostsContent />
            <PostsContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
