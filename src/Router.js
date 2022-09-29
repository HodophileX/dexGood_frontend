import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import LandingPage from './Views/LandingPage/LandingPage';
import LoginContainer from './Views/Login/LoginContainer';
import Main from './Views/Main/Main';
import UserContainer from './Views/User/UserContainer';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-color text-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/user" element={<UserContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
