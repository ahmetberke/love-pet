import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Routes, HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Header from "./components/header/header";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

ReactDOM.render(
    <HashRouter>
        <Header></Header>

        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<Home/>} />
            <Route path="/contact" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    </HashRouter>,
    document.getElementById('root')
);
