import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from'./components/Navbar'
import Services from './components/Services.js';
import './App.css'
// import {ContextCreator} from './context-api/ContextCreator';
import Admin from './components/Admin';
import SignupLogin from './components/home/SignupLogin/SignupLogin';
import KYC from './components/KYC';
import KYC_1 from './components/KYC_1';


function App() {
  // const token = localStorage.getItem('token')    


  return (
    
    // <ContextCreator.Provider value = {{token}}>
      <div className="App">
          {/* <div id="main" >               */}
            
            <BrowserRouter>
            <SignupLogin />                {/* for hovering signup and login */}
              <Routes>
                <Route path='/admin/*' element={<Admin />} />
                
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home /> } />
                  <Route path="/services" element={<Services /> } />
                  {/* <Route path="/KYC" element={<KYC /> } /> */}
                  <Route path="/KYC" element={<KYC_1 /> } />
                  
                </Route>
              </Routes>
            </BrowserRouter>
          {/* </div> */}

      </div>
    // </ContextCreator.Provider>
  );
}

export default App;