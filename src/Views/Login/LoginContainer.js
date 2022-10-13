import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginContent from '../../components/Login/LoginContent';
import { userRoute } from '../../route';
import { userGetAction } from '../../_redux/action/user';

const LoginContainer = () => {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetAction());
  }, []);

  useEffect(() => {
    if (user) navigate(userRoute());
  }, [user]);
  return <LoginContent />;
};

export default LoginContainer;
