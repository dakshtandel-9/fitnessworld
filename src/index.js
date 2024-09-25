import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './landingpage/Home/HomePage';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './landingpage/About/AboutPage';
import Membership from './landingpage/Membership/MembershipPage';
import NotFound from './landingpage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);