import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import LandingPage from './Views/LandingPage';
import Main from './Views/Main';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-color text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
