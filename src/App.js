import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Index from './pages/index.js';
import Cars from './pages/cars.js';
import Login from "./components/Login/login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Index />}/>
        <Route path="/cars" element ={<Cars />}/>
        <Route path="/login" element ={<Login />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
