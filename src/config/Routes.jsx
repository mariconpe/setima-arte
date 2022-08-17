import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../App.scss';

const AppRoutes = () => {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route
            path='/:category/search/:keyword'
            element={<Catalog/>}
          />
          <Route 
            path='/:category/:id' 
            element={<Detail/>}
          />
          <Route 
            path='/:category' 
            element={<Catalog/>}
          />
          <Route 
            path='/'
            element={<Home/>}
          />
      </Routes>
      <Footer/>
    </Router>
  )
};

export default AppRoutes;