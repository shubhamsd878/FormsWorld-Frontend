import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Services from './components/Services.js';
import './App.css'
import Admin from './components/Admin';
import SignupLogin from './components/home/SignupLogin/SignupLogin';
import KYC from './components/KYC';
import AboutUs from './components/About/AboutUs';
import AccountSetting from './components/AccountSetting/AccountSetting';


function App() {

  return (

    <div className="App">

      <BrowserRouter>
        <SignupLogin />                {/* for hovering signup and login */}
        <Routes>
          <Route path='/admin/*' element={<Admin />} />

          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/KYC" element={<KYC />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/accountsettings" element={<AccountSetting />} />

            {/* Footer is imported to each component individually because admin page is also showing footer */}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;