import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../../components/User/UserProfile';
import { getPostAction } from '../../_redux/action/posts';

const UserContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, []);
  const posts = useSelector(state => state.post.post);
  const user = useSelector(state => state.user.user);
  return (
    <div className="min-h-screen ">
      <UserProfile user={user} />
    </div>
  );
};

export default UserContainer;
