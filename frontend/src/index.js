/* eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import {AuthProvider} from './contexts/auth-context';
import Contact from './components/contact/contact';
import About from './about/about';
import Header from './components/header/header';
import ForgetPassword from './components/forgot-password/forgot-password';
import RenewPassword from './components/renew-password/renew-password';

ReactDOM.render(
    <AuthProvider>
      <HashRouter>
        <Header></Header>

        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup/:userType" element={<Signup/>}/>
          <Route exact path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route exact path="/renewPassword" element={<RenewPassword/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </AuthProvider>,
    document.getElementById('root'),
);
