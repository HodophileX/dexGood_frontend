import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostsContent from '../../components/Posts/PostsContent';
import { getPostAction } from '../../_redux/action/posts';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  return (
    <div className="min-h-screen">
      <PostsContent />
    </div>
  );
};

export default MainContainer;
