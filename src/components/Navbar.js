import React from 'react';
import './NavbarCSS.css'
import logo from './logo/logo.png';
import { Outlet, Link } from "react-router-dom";
import Signup from './Navbar/Signup';
import Login from './Navbar/Login';
import { useContext, useState, useEffect } from 'react/cjs/react.development';
import { ContextCreator } from '../context-api/ContextCreator';
import KYC from './KYC';
import defaultUserIcon from './Navbar/defaultUserIcon.jpg'

// import {useState} from 'react';
export default function Navbar() {

    const [signUp, setSignUp] = useState(false)
    const [signIn, setSignIn] = useState(false)

    const {token} = useContext(ContextCreator)
    // sideNavSignUp functions

    const openNavSignUp = () => {
        document.getElementById("mySideNavSignUp").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";  
    }

    const openNavSignIn = () => {
        document.getElementById("mySideNavSignIn").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";  
    }
    
   // closeNav inside SignIn and SignUp

    return (
        <div className='Navbar-main'>
            <header className='header'>
                <a className="logo" href="/"><img src={logo} alt="logo" width="40%" /></a>
                <nav>
                    <ul className="nav__links">

                        <li><Link to="/"><b style={{fontSize:"1.15vw", marginTop:"2px"}}>Home</b></Link></li> 
                        <li className='text-muted'> | </li>
                        <li><Link to="services"><b style={{fontSize:"1.15vw"}}>Services</b></Link></li>
                        <li className='text-muted'> | </li>
                        <li><Link to="KYC"><b style={{fontSize:"1.15vw"}}>KYC</b></Link></li>

                    </ul>
                </nav>
                    
                    
                    {!token && 
                    (
                    <div className="cta">
                        <a className="cta-link" onClick={() => { openNavSignUp() } } >Sign Up!</a>
                        &nbsp;/
                        <a className="cta-link" onClick={ () => { openNavSignIn() } }>Sign In!</a>
                    </div>
                    )}

{/* dropdown if login */}

                    {token && (
                        <>
                            <div className="dropdown">
                                <img className= "default-user-image " src={defaultUserIcon} alt='default_user_image' />
                                <div className="dropdown-content">
                                    <a href="#">Orders</a>
                                    <a href="#"> Settings</a>
                                    <a href="" onClick={ () => {localStorage.removeItem('token');localStorage.removeItem('uid'); window.location.reload()}  }>Sign Out</a>
                                </div>
                            </div>

                        </>
                    )}

                   
                <p className="menu cta">Menu</p>
            </header>

            <div className="overlay">
                <a className="close">&times;</a>
                <div className="overlay__content">
                    <a href="https://www.google.com">Services</a>
                    <a href="https://www.google.com">Projects</a>
                    <a href="https://www.google.com">About</a>
                </div>
            </div>


            {/* SideNav Signin */}
            <Signup />
            <Login />
            
            
        {/* --------------------------  SignIn  ----------------------- */}

        

            <Outlet />
        </div>
    );
}