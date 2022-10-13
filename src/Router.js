import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import LandingPage from './Views/LandingPage/LandingPage';
import VisionPage from './Views/LandingPage/VisionPage';
import LoginContainer from './Views/Login/LoginContainer';
import MainContainer from './Views/Main/MainContainer';
import UserContainer from './Views/User/UserContainer';
import { userGetAction } from './_redux/action/user';

const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetAction());
  }, []);
  return (
    <>
      <BrowserRouter>
        <div className="bg-color text-black">
          <div className="relative">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainContainer />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/user" element={<UserContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
