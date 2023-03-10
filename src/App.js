import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Main from "./pages/Main"
import Home from "./pages/Home"

import logo from './logo.svg';
import './App.css';


export default function App() {

  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <Provider store={store}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </Provider>
    </div>
  );
}
