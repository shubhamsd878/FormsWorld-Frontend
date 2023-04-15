import React, { useContext, useState, useEffect } from 'react';
import './NavbarCSS.css'
import logo from './logo/logo.png';
import { Outlet, Link } from "react-router-dom";
// import { useContext, useState, useEffect } from 'react/cjs/react.development';
// import { ContextCreator } from '../context-api/ContextCreator';
// import KYC from './KYC';
import defaultUserIcon from './Navbar/defaultUserIcon.jpg'

export default function Navbar() {
    const token = localStorage.getItem('token')
    
    let popupContainer
    let loginForm
    let signupForm

    // initializing popup signup, signin dom elements
    useEffect(() => {
        popupContainer = document.querySelector(".popup-container");
        loginForm = document.querySelector(".login-form");
        signupForm = document.querySelector(".signup-form");
    }, [])


    // popup Signup 
    const popupSignup = () => {
        popupContainer.style.display = "flex"
        loginForm.style.display = "none";
        signupForm.style.display = "flex";
    }
    
    // popup Signin 
    const popupSignin = () => {
        popupContainer.style.display = "flex"
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
    }


    return (
        <div className='Navbar-main'>
            <header className='header'>
                <a className="logo" href="/"><img src={logo} alt="logo" width="40%" /></a>
                <nav>
                    <ul className="nav__links">

                        <li><Link to="/"><b style={{ fontSize: "1.15vw", marginTop: "2px" }}>Home</b></Link></li>
                        <li className='text-muted'> | </li>
                        <li><Link to="services"><b style={{ fontSize: "1.15vw" }}>Services</b></Link></li>
                        <li className='text-muted'> | </li>
                        <li><Link to="KYC"><b style={{ fontSize: "1.15vw" }}>KYC</b></Link></li>

                    </ul>
                </nav>


                {!token &&
                    (
                        <div className="cta">
                            <a className="cta-link" onClick={() => { popupSignup() }} >Sign Up!</a>
                            &nbsp;/
                            <a className="cta-link" onClick={() => { popupSignin() }}>Sign In!</a>
                        </div>
                    )}

                {/* dropdown if login */}

                {token && (
                    <>
                        <div className="dropdown">
                            <img className="default-user-image " src={defaultUserIcon} alt='default_user_image' />
                            <div className="dropdown-content">
                                <a href="#">Orders</a>
                                <a href="#"> Settings</a>
                                <a href="" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('uid'); window.location.reload() }}>Sign Out</a>
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

            <Outlet />
        </div>
    )

    // );
}