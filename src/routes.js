import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';


import AuthGuard from './HoC/Auth';
import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';
import Home from './components/Home/index';
import Signin from './components/Signin/index';
import Dashboard from './components/admin/Dashboard';

const RoutesApp = (props) => {
  return (
    <BrowserRouter>
      <Header user={props.user}/>
      <Routes>
        <Route path='/signin' element={<Signin user={props.user} />}/>
        <Route path='/dashboard' element={AuthGuard(Dashboard)} />
        <Route path='/' exact element={<Home />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
