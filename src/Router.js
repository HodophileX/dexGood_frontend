import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import LandingPage from './Views/LandingPage';
import LoginContainer from './Views/LoginContainer';
import Main from './Views/Main';

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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
