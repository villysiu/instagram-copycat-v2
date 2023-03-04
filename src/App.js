import React from 'react';

import Header from './features/header/Header';
import './App.css';


import {Outlet } from "react-router-dom";

// import Test from './features/Test';


function App() {
  console.log("in App")

  return (
   
    <div className="App">
      <div className="header" ></div> 
      <Header />

     < Outlet />
    </div>

    
  );
}

export default App;
