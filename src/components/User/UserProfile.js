import React from 'react';
import PostsContent from '../Posts/PostsContent';
import Details from './Details';
import UserFields from './UserFields';

const UserProfile = () => {
  return (
    <div className="w-full">
      <div className="border-b-[1px] border-black">
        <UserFields />
      </div>
      <div className="mx-40">
        <div className="w-full flex items-start">
          <div className="w-[30vw] hidden md:flex justify-center">
            <Details />
          </div>
          <div className="w-[60vw] px-20 mt-2 ">
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
