import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from'./components/Navbar'
import Services from './components/Services.js';
import './App.css'
import { useState } from 'react/cjs/react.production.min';
import {ContextCreator} from './context-api/ContextCreator';
import KYC from './components/KYC';
import Admin from './components/Admin';


function App() {
  const token = localStorage.getItem('token')  
  

  return (
    
    <ContextCreator.Provider value = {{token}}>
      <div className="App">
          <div id="main" >
            {/* if - else */}
            {/* {  window.location.pathname == '/admin' ? 
              (<Admin />) : */}
              
            
            <BrowserRouter>
              <Routes>
                <Route path='/admin/*' element={<Admin />} />
                
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home /> } />
                  <Route path="/services" element={<Services /> } />
                  <Route path="/KYC" element={<KYC /> } />
                  
                </Route>
              </Routes>
            </BrowserRouter>
          {/* } */}
          </div>

      </div>
    </ContextCreator.Provider>
  );
}

export default App;
