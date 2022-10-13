import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Common/post/Post';
import PropType from 'prop-types';
import Details from './Details';
import UserFields from './UserFields';
import { SubmitButton } from '../Common/Buttons/SubmitButton';

const UserProfile = ({ user }) => {
  const posts = useSelector(state => state.post.post);

  return (
    <div className="w-full">
      <div className="border-b-[1px] border-black">
        <UserFields />
      </div>
      <div className="mx-40">
        <div className="w-full flex items-start">
          <div className="w-[30vw] hidden md:flex justify-center">
            <Details user={user} />
          </div>
          <div className="w-[60vw] px-20 mt-2 ">
            {posts ? (
              posts.map((post, index) => {
                return <Post post={post} key={index} />;
              })
            ) : (
              <>
                <div className="bg-orange-400 px-8 py-2 rounded-md ">
                  Write your first deed
                  <div className="my-2 py-2">
                    <SubmitButton title="Write deed" />
                  </div>
                </div>
              </>
            )}
            <div className="mt-10">Active on platform</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
UserProfile.propTypes = {
  user: PropType.object,
};
